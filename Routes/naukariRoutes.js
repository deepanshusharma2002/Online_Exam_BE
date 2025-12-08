const express = require('express');
const {
    createNaukari,
    getAllNaukari,
    getNaukariById,
    updateNaukari,
    deleteNaukari
} = require('../Controller/naukariController');
const verifyUser = require('../Middleware/authMiddleware');

const router = express.Router();

router.post("/", verifyUser, createNaukari);
router.get("/", getAllNaukari);
router.get("/:id", getNaukariById);
router.put("/:id", verifyUser, updateNaukari);
router.delete("/:id", deleteNaukari);

module.exports = router;
