const express = require("express");
const router = express.Router();
const {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  deletePlan,
  createPlanInterested,
  getPlanInterested,
  deletePlanInterested
} = require("../Controller/planController.js");
const verifyUser = require("../Middleware/authMiddleware.js");

router.post("/", verifyUser, createPlan);
router.get("/", getPlans);          // pagination + search
// router.get("/:id", getPlanById);    // by id
router.put("/:id", verifyUser, updatePlan);
router.delete("/:id", verifyUser, deletePlan);  // soft delete

router.post("/interested", createPlanInterested);
router.get("/interested", getPlanInterested);
router.delete("/interested/:id", verifyUser, deletePlanInterested);

module.exports = router;
