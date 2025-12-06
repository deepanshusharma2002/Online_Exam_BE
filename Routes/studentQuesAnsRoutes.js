const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion
} = require("../Controller/studentQuesAnsController");

const verifyUser = require("../Middleware/authMiddleware");

// ✅ Admin / agent routes
router.post("/", verifyUser, createQuestion);
router.get("/", getAllQuestions);
router.get("/:id", getQuestionById);
router.put("/:id", verifyUser, updateQuestion);
router.delete("/:id", verifyUser, deleteQuestion);

module.exports = router;
