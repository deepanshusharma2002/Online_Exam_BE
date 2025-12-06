const express = require('express');
const {
  createHomeText,
  getAllHomeText,
  updateHomeText,
  deleteHomeText,
} = require('../Controller/homeTextController');
const verifyUser = require('../Middleware/authMiddleware');

const router = express.Router();

router.post("/", verifyUser, createHomeText);
router.get("/", getAllHomeText);
router.put("/:id", verifyUser, updateHomeText);
router.delete("/:id", verifyUser, deleteHomeText);

module.exports = router;
