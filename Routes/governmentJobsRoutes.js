const express = require('express');
const {
  createGovernmentJobs,
  getAllGovernmentJobs,
  updateGovernmentJobs,
  deleteGovernmentJobs,
} = require('../Controller/governmentJobsController');
const verifyUser = require('../Middleware/authMiddleware');

const router = express.Router();

router.post("/", verifyUser, createGovernmentJobs);
router.get("/", getAllGovernmentJobs);
router.put("/:id", verifyUser, updateGovernmentJobs);
router.delete("/:id", verifyUser, deleteGovernmentJobs);

module.exports = router;
