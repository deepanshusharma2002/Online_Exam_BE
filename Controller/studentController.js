const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const sendEmail = require("../Utils/sendEmail");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.studentSignup = async (req, res) => {
    try {
        const { name, email, mobile, age, gender, password } = req.body;

        if (!name || !email || !password || !mobile || !age || !gender) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingStudent = await prisma.student.findUnique({
            where: { email },
        });

        if (existingStudent && existingStudent.is_verified) {
            return res.status(409).json({
                success: false,
                message: "Student already registered and verified",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const student = existingStudent
            ? existingStudent
            : await prisma.student.create({
                data: {
                    name,
                    email,
                    mobile,
                    age: parseInt(age),
                    gender,
                    password: hashedPassword,
                    status: 0
                },
            });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        await prisma.studentOTP.create({
            data: {
                student_id: student.student_id,
                otp_code: otp,
                expires_at: new Date(Date.now() + 10 * 60 * 1000), // 10 min
            },
        });

        await sendEmail(email, "Verify your Email", `Your OTP is ${otp}`);

        return res.status(201).json({
            success: true,
            message: "OTP sent to email. Please verify.",
        });
    } catch (error) {
        console.error("Student Signup Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

exports.verifyStudentOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const student = await prisma.student.findUnique({
            where: { email },
        });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        const validOtp = await prisma.studentOTP.findFirst({
            where: {
                student_id: student.student_id,
                otp_code: otp,
                is_used: false,
                expires_at: { gt: new Date() },
            },
            orderBy: { created_at: "desc" },
        });

        if (!validOtp) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP",
            });
        }

        await prisma.$transaction([
            prisma.studentOTP.update({
                where: { otp_id: validOtp.otp_id },
                data: { is_used: true },
            }),
            prisma.student.update({
                where: { student_id: student.student_id },
                data: {
                    is_verified: true,
                    status: 1
                },
            }),
        ]);

        return res.json({
            success: true,
            message: "Student verified successfully",
        });
    } catch (error) {
        console.error("OTP Verification Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

exports.studentLoginWithPassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password required",
            });
        }

        const student = await prisma.student.findUnique({
            where: { email },
        });

        if (!student) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        if (!student.is_verified || student.status !== 1) {
            return res.status(403).json({
                success: false,
                message: "Please verify your email first",
            });
        }

        const isMatch = await bcrypt.compare(password, student.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                student_id: student.student_id,
                email: student.email,
                role: "STUDENT",
                class: student.class || null,
            },
            process.env.JWT_SECRET_student,
            { expiresIn: "30d" }
        );

        return res.json({
            success: true,
            message: "Login successful",
            token,
            student: {
                student_id: student.student_id,
                name: student.name,
                email: student.email,
                role: "STUDENT",
                class: student.class || null,
            },
        });
    } catch (error) {
        console.error("Student Login Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

const isExamLive = (exam) => {
    const {
        start_date,
        start_time,
        end_date,
        end_time,
    } = exam;

    // ✅ Build start DateTime
    const startDateTime = new Date(start_date);
    const [startH, startM] = start_time.split(":").map(Number);
    startDateTime.setHours(startH, startM, 0, 0);

    // ✅ Build end DateTime
    const endDateTime = new Date(end_date);
    const [endH, endM] = end_time.split(":").map(Number);
    endDateTime.setHours(endH, endM, 0, 0);

    const now = new Date();

    return now >= startDateTime && now <= endDateTime;
};

exports.getExamQuestions = async (req, res) => {
    try {
        const student_id = req.student.student_id;

        const exam_schedule = await prisma.exam_schedule.findFirst({
            where: {
                status: 1,
            },
            orderBy: { exam_schedule_id: "desc" }
        });

        if (!exam_schedule) {
            return res.json({
                success: false,
                message: "No active exam scheduled",
                code: "NO_EXAM"
            });
        }

        const alreadyCompleted = await prisma.student_exam.findFirst({
            where: {
                student_id,
            },
            orderBy: {
                exam_id: "desc",
            },
        });

        if (alreadyCompleted || !isExamLive(exam_schedule)) {
            return res.status(403).json({
                success: false,
                code: "EXAM_ALREADY_COMPLETED",
                message: "Exam already completed",
            });
        }

        const exam = await prisma.student_exam.create({
            data: {
                student_id,
                total_q: exam_schedule?.total_q,
                status: 1
            }
        });

        const questions = await prisma.$queryRaw`
        SELECT 
          student_ques_ans_id,
          question,
          option_a,
          option_b,
          option_c,
          option_d
        FROM student_ques_ans
        WHERE status = 1
        ORDER BY RANDOM()
        LIMIT ${exam_schedule?.total_q}
      `;

        res.status(200).json({
            success: true,
            exam_id: exam.exam_id,
            data: questions,
            duration: Number(exam_schedule?.exam_time_min || 60) * 60
        });

    } catch (error) {
        console.error("Exam Question Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to load exam questions"
        });
    }
};

exports.submitExam = async (req, res) => {
    try {
        const { exam_id, answers, fatal } = req.body;
        let score = 0;

        for (const ans of answers) {
            const q = await prisma.student_ques_ans.findUnique({
                where: { student_ques_ans_id: ans.question_id },
                select: { ans_option: true },
            });

            const correct = q && q.ans_option === ans.selected;
            if (correct) score++;

            await prisma.student_exam_answers.create({
                data: {
                    exam_id,
                    question_id: ans.question_id,
                    selected: ans.selected,
                    is_correct: correct,
                },
            });
        }

        await prisma.student_exam.update({
            where: { exam_id },
            data: {
                score,
                end_time: new Date(),
                fatal,
                status: 2,
            },
        });

        res.json({
            success: true,
            score,
            total: answers.length,
        });
    } catch (error) {
        console.error("Submit Exam Error:", error);
        res.status(500).json({ success: false });
    }
};

exports.getStudentExamResult = async (req, res) => {
    try {
        const student_id = req.student.student_id;

        const latestExam = await prisma.student_exam.findFirst({
            where: {
                student_id,
            },
            orderBy: {
                exam_id: "desc",
            },
        });

        if (!latestExam) {

            const exam_schedule = await prisma.exam_schedule.findFirst({
                where: {
                    status: 1,
                },
                orderBy: { exam_schedule_id: "desc" }
            });

            if (!exam_schedule) {
                return res.json({
                    success: false,
                    message: "No active exam scheduled",
                    hasLiveExam: false,
                    hasExam: false,
                });
            }

            if (isExamLive(exam_schedule)) {
                return res.json({
                    success: true,
                    hasExam: false,
                    hasLiveExam: true,
                    result: exam_schedule,
                });
            }

            return res.json({
                success: true,
                hasExam: false,
            });
        }

        res.json({
            success: true,
            hasExam: true,
            hasLiveExam: false,
            result: {
                exam_id: latestExam.exam_id,
                score: latestExam.score,
                total: latestExam.total_q,
                submitted_on: latestExam.end_time,
                fatal: latestExam.fatal,
            },
        });

    } catch (err) {
        console.error("Result Fetch Error:", err);
        res.status(500).json({ success: false, hasLiveExam: false, hasExam: false });
    }
};

exports.getExamBreakup = async (req, res) => {
    try {
        const exam_id = Number(req.params.exam_id);

        const data = await prisma.student_exam_answers.findMany({
            where: { exam_id },
            include: {
                question: {
                    select: {
                        question: true,
                        option_a: true,
                        option_b: true,
                        option_c: true,
                        option_d: true,
                        ans_option: true,
                    },
                },
            },
            orderBy: { id: "asc" },
        });

        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.error("Breakup Error:", err);
        res.status(500).json({ success: false });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        // ✅ Pagination params
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // ✅ Optional filters
        const {
            status,
            is_verified,
            gender,
            class: studentClass,
            search,
            isAuthorized
        } = req.query;

        // ✅ Build filter dynamically
        const where = {};

        if (status !== undefined) where.status = Number(status);
        if (is_verified !== undefined)
            where.is_verified = is_verified === "true";
        if (gender) where.gender = gender;
        if (studentClass) where.class = studentClass;
        if (isAuthorized === "true") {
            where.class = { not: null };
        }
        if (isAuthorized === "false") {
            where.class = null;
        }

        if (search) {
            where.OR = [
                { name: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
                { mobile: { contains: search } },
            ];
        }

        // ✅ Fetch data + count in parallel
        const [students, totalCount] = await Promise.all([
            prisma.student.findMany({
                where,
                skip,
                take: limit,
                orderBy: { student_id: "desc" },
                select: {
                    student_id: true,
                    name: true,
                    email: true,
                    mobile: true,
                    age: true,
                    gender: true,
                    class: true,
                    is_verified: true,
                    status: true,
                    created_at: true,
                },
            }),
            prisma.student.count({ where }),
        ]);

        const totalPages = Math.ceil(totalCount / limit);

        return res.status(200).json({
            success: true,
            data: students,
            pagination: {
                totalItems: totalCount,
                totalPages,
                currentPage: page,
                pageSize: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            },
        });
    } catch (error) {
        console.error("Get Students Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch students",
            error: error.message,
        });
    }
};


exports.updateExamSchedule = async (req, res) => {
    try {
        const exam_schedule_id = Number(req.params.exam_schedule_id);

        const {
            exam_name,
            start_date,
            start_time,
            end_date,
            end_time,
            total_q,
            exam_time_min,
            class: studentClass,
            subject,
            status,
        } = req.body;

        // ✅ Validation
        if (!exam_schedule_id) {
            return res.status(400).json({
                success: false,
                message: "Invalid exam schedule ID",
            });
        }

        if (
            !exam_name ||
            !start_date ||
            !start_time ||
            !end_date ||
            !end_time ||
            !studentClass ||
            !subject ||
            !total_q ||
            !exam_time_min
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // ✅ Check if record exists
        const existing = await prisma.exam_schedule.findUnique({
            where: { exam_schedule_id },
        });

        if (!existing) {
            return res.status(404).json({
                success: false,
                message: "Exam schedule not found",
            });
        }

        // ✅ Update
        const updated = await prisma.exam_schedule.update({
            where: { exam_schedule_id },
            data: {
                exam_name,
                start_date: new Date(start_date),
                start_time,
                end_date: new Date(end_date),
                end_time,
                total_q: Number(total_q),
                exam_time_min: Number(exam_time_min),
                studentClass: studentClass ? studentClass : null,
                subject: subject ? subject : null,
                status: Number(status),
            },
        });

        return res.status(200).json({
            success: true,
            message: "Exam schedule updated successfully",
            data: updated,
        });
    } catch (error) {
        console.error("Update Exam Schedule Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update exam schedule",
            error: error.message,
        });
    }
};

exports.createExamSchedule = async (req, res) => {
    try {
        const {
            exam_name,
            start_date,
            start_time,
            end_date,
            end_time,
            total_q,
            exam_time_min,
            class: studentClass,
            subject,
            status,
        } = req.body;

        if (
            !exam_name ||
            !start_date ||
            !start_time ||
            !end_date ||
            !end_time ||
            !studentClass ||
            !subject ||
            !total_q ||
            !exam_time_min
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // ✅ Create
        const created = await prisma.exam_schedule.create({
            data: {
                exam_schedule_id,
                exam_name,
                start_time,
                end_date,
                end_time,
                total_q,
                exam_time_min,
                class: studentClass,
                subject,
                status,
            },
        });

        return res.status(201).json({
            success: true,
            message: "Exam schedule created successfully",
            data: created,
        });
    } catch (error) {
        console.error("Create Exam Schedule Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create exam schedule",
            error: error.message,
        });
    }
}

exports.updateStudent = async (req, res) => {
    try {
        const student_id = Number(req.params.student_id);

        const {
            class: studentClass,
            status,
        } = req.body;

        // ✅ Validation
        if (!student_id) {
            return res.status(400).json({
                success: false,
                message: "Invalid exam schedule ID",
            });
        }

        // ✅ Check if record exists
        const existing = await prisma.student.findUnique({
            where: { student_id },
        });

        if (!existing) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        // ✅ Update
        const updated = await prisma.student.update({
            where: { student_id },
            data: {
                class: studentClass ? studentClass : null,
                status: Number(status),
            },
        });

        return res.status(200).json({
            success: true,
            message: "Exam schedule updated successfully",
            data: updated,
        });
    } catch (error) {
        console.error("Update Exam Schedule Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update exam schedule",
            error: error.message,
        });
    }
};

exports.validateStudent = async (req, res) => {
    const { class: StudentClass } = req.query;

    let stuClass = StudentClass || null;
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Authorization token missing' });
        }

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_student);
        if (!decoded) {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        }
        const student = await prisma.student.findUnique({
            where: { student_id: decoded.student_id },
        });

        if (!student) {
            return res.status(404).json({ success: false, message: 'student not found' });
        }

        if (student?.status !== 1 || student?.class !== stuClass) {
            return res.status(403).json({
                success: false,
                message: "Student is not active",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student is valid",
            student: {
                student_id: student.student_id,
                name: student.name,
                email: student.email,
                role: "STUDENT",
                class: student.class || null,
            },
        });

    } catch (error) {
        console.error("Update Exam Schedule Error:", error);
        return res.status(500).json({
            success: false,
            message: "Student is not active",
            error: error.message,
        });
    }
};








