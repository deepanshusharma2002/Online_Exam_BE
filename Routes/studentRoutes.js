const express = require("express");
const router = express.Router();
const {
  studentSignup,
  verifyStudentOtp,
  studentLoginWithPassword,
  getExamQuestions,
  submitExam,
  getStudentExamResult,
  getExamBreakup,
  getAllStudents,
  updateExamSchedule,
  updateStudent,
  validateStudent,
  createExamSchedule,
  getAllExamSchedules,
  deleteExamSchedule,
  getStudentExamSchedules,
  getStudentExamResultAdmin
} = require("../Controller/studentController");
const verifyAgent = require("../Middleware/verifyAgent");
const verifyUser = require("../Middleware/authMiddleware");

router.post("/signup", studentSignup);
router.post("/verify-otp", verifyStudentOtp);
router.post("/login-password", studentLoginWithPassword);

router.get("/exam/questions", verifyAgent, getExamQuestions);
router.post("/exam/submit", verifyAgent, submitExam);
router.get("/exam/result", verifyAgent, getStudentExamResult);
router.get("/exam/result/admin", verifyUser, getStudentExamResultAdmin);
router.get("/exam/breakup/:exam_id", getExamBreakup);

router.get("/", verifyUser, getAllStudents);
router.get("/validate", validateStudent);
router.put("/:student_id", verifyUser, updateStudent);

router.get("/exams", verifyAgent, getStudentExamSchedules);


router.get("/exam-schedule", verifyUser, getAllExamSchedules);
router.put("/exam-schedule/:exam_schedule_id", verifyUser, updateExamSchedule);
router.delete("/exam-schedule/:exam_schedule_id", verifyUser, deleteExamSchedule);
router.post("/exam-schedule", verifyUser, createExamSchedule);

module.exports = router;
