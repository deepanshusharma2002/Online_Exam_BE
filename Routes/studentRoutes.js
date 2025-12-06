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
  updateExamSchedule 
} = require("../Controller/studentController");
const verifyAgent = require("../Middleware/verifyAgent");
const verifyUser = require("../Middleware/authMiddleware");

router.post("/signup", studentSignup);
router.post("/verify-otp", verifyStudentOtp);
router.post("/login-password", studentLoginWithPassword);

router.post("/exam/questions", verifyAgent, getExamQuestions);
router.post("/exam/submit", verifyAgent, submitExam);
router.get("/exam/result", verifyAgent, getStudentExamResult);
router.get("/exam/breakup/:exam_id", verifyAgent, getExamBreakup);

router.get("/", verifyUser, getAllStudents);
router.put("/exam-schedule/:exam_schedule_id", verifyUser, updateExamSchedule);

module.exports = router;
