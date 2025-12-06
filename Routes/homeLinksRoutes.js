const express = require('express');
const {
  createHomeLinks,
  getAllHomeLinks,
  updateHomeLinks,
  deleteHomeLinks,
} = require('../Controller/homeLinksController');
const verifyUser = require('../Middleware/authMiddleware');

const router = express.Router();

router.post("/", verifyUser, createHomeLinks);
router.get("/", getAllHomeLinks);
router.put("/:id", verifyUser, updateHomeLinks);
router.delete("/:id", verifyUser, deleteHomeLinks);

module.exports = router;
