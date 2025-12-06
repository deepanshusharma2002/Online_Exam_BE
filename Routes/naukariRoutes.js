const express = require('express');
const {
    createNaukari,
    getAllNaukari,
    getNaukariById,
    updateNaukari,
    deleteNaukari,
    setPriorityNaukari
} = require('../Controller/naukariController');
const verifyUser = require('../Middleware/authMiddleware');

const router = express.Router();

router.post("/", verifyUser, createNaukari);
router.get("/", getAllNaukari);
router.post("/priority", verifyUser, setPriorityNaukari);
router.get("/:id", getNaukariById);
router.put("/:id", verifyUser, updateNaukari);
router.delete("/:id", deleteNaukari);

module.exports = router;
