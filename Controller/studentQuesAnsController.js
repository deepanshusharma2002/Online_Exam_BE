const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * ✅ Create Question
 */
exports.createQuestion = async (req, res) => {
  try {
    const {
      question,
      option_a,
      option_b,
      option_c,
      option_d,
      ans_option,
      created_by
    } = req.body;

    if (
      !question ||
      !option_a ||
      !option_b ||
      !option_c ||
      !option_d ||
      !ans_option
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const ques = await prisma.student_ques_ans.create({
      data: {
        question,
        option_a,
        option_b,
        option_c,
        option_d,
        ans_option,
        created_by: created_by || null,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Question created successfully",
      data: ques,
    });
  } catch (error) {
    console.error("Create Question Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { status, question, ans_option } = req.query;

    let filter = {
      status: {
        not: 0,
      },
    };

    if (status !== undefined) filter.status = Number(status);
    if (ans_option) filter.ans_option = ans_option;
    if (question) {
      filter.question = {
        contains: question,
        mode: "insensitive",
      };
    }

    const [questions, totalCount] = await Promise.all([
      prisma.student_ques_ans.findMany({
        skip,
        take: limit,
        where: filter,
        orderBy: { student_ques_ans_id: "desc" },
      }),
      prisma.student_ques_ans.count({
        where: filter,
      }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return res.status(200).json({
      success: true,
      data: questions,
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
    console.error("Get Questions Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};


/**
 * ✅ Get Question by ID
 */
exports.getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await prisma.student_ques_ans.findUnique({
      where: { student_ques_ans_id: parseInt(id) },
    });

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    res.json({
      success: true,
      data: question,
    });
  } catch (error) {
    console.error("Get Question Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * ✅ Update Question
 */
exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      question,
      option_a,
      option_b,
      option_c,
      option_d,
      ans_option,
      updated_by
    } = req.body;

    const existingSection = await prisma.student_ques_ans.findUnique({
      where: { student_ques_ans_id: Number(id) },
    });

    if (!existingSection) {
      return res.status(404).json({ success: false, message: 'Question not found.' });
    }

    const updated = await prisma.student_ques_ans.update({
      where: { student_ques_ans_id: parseInt(id) },
      data: {
        question: question || existingSection?.question,
        option_a: option_a || existingSection?.option_a,
        option_b: option_b || existingSection?.option_b,
        option_c: option_c || existingSection?.option_c,
        option_d: option_d || existingSection?.option_d,
        ans_option: ans_option || existingSection?.ans_option,
        updated_by: updated_by || null,
      },
    });

    res.json({
      success: true,
      message: "Question updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Update Question Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    // await prisma.student_ques_ans.update({
    //   where: { student_ques_ans_id: parseInt(id) },
    //   data: { status: 0 },
    // });

    await prisma.student_ques_ans.delete({
      where: {
        student_ques_ans_id: parseInt(id),
      },
    });

    res.json({
      success: true,
      message: "Question deleted successfully",
    });
  } catch (error) {
    console.error("Delete Question Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
