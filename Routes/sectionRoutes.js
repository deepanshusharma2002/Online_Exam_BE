const express = require('express');
const {
  createSection,
  getAllSection,
  getSectionById,
  updateSection,
  deleteSection,
} = require('../Controller/SectionController');
const verifyUser = require('../Middleware/authMiddleware');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './uploads/images',
  filename: (req, file, cb) => {
    cb(null, Date.now() + "~" + file.originalname);
  },
});
const upload = multer({ storage });

const router = express.Router();

router.post("/", verifyUser, upload.single('img_url'), createSection);
router.get("/", getAllSection);
router.get("/:id", getSectionById);
router.put("/:id", verifyUser, upload.single('img_url'), updateSection);
router.delete("/:id", verifyUser, deleteSection);

module.exports = router;
