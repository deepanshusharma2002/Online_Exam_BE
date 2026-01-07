const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * ✅ Create Plan
 */
exports.createPlan = async (req, res) => {
  try {
    const data = req.body;

    const plan = await prisma.plan.create({
      data,
    });

    res.status(201).json({
      message: "Plan created successfully",
      data: plan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating plan" });
  }
};

/**
 * ✅ Get Plans (Pagination + Search)
 * Query params:
 * page, limit, search, status, plan_type
 */
exports.getPlans = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      status,
      plan_type,
    } = req.query;

    const skip = (page - 1) * limit;

    const where = {
      AND: [
        search
          ? {
            OR: [
              { plan_name: { contains: search, mode: "insensitive" } },
              { plan_code: { contains: search, mode: "insensitive" } },
            ],
          }
          : {},
        status ? { status: Number(status) } : {},
        plan_type ? { plan_type } : {},
      ],
    };

    const [data, total] = await Promise.all([
      prisma.plan.findMany({
        where,
        skip: Number(skip),
        take: Number(limit),
        orderBy: { created_at: "desc" },
      }),
      prisma.plan.count({ where }),
    ]);

    res.json({
      data,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching plans" });
  }
};

/**
 * ✅ Get Plan By ID
 */
exports.getPlanById = async (req, res) => {
  try {
    const { id } = req.params;

    const plan = await prisma.plan.findUnique({
      where: { plan_id: BigInt(id) },
    });

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json({ data: plan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching plan" });
  }
};

/**
 * ✅ Update Plan
 */
exports.updatePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const plan = await prisma.plan.update({
      where: { plan_id: Number(id) },
      data,
    });

    res.json({
      message: "Plan updated successfully",
      data: plan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating plan" });
  }
};

/**
 * ✅ Delete Plan (Soft Delete)
 */
exports.deletePlan = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.plan.delete({
      where: { plan_id: Number(id) },
    });

    res.json({ message: "Plan deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting plan" });
  }
};


exports.createPlanInterested = async (req, res) => {
  try {
    const { plan_id, name, phone, email, message } = req.body;

    if (!plan_id || !name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Plan, name and phone are required",
      });
    }

    const interested = await prisma.planInterested.create({
      data: {
        plan_id: Number(plan_id),
        name,
        phone,
        email: email || null,
        message: message || null,
      },
    });

    res.status(201).json({
      success: true,
      message: "Interest submitted successfully",
      data: interested,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit interest",
    });
  }
};


/**
 * ✅ GET Plan Interested (Pagination + Search)
 * Query params:
 * page, limit, search, plan_id
 */
exports.getPlanInterested = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      plan_id,
    } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const where = {
      AND: [
        plan_id ? { plan_id: Number(plan_id) } : {},
        search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { phone: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
              ],
            }
          : {},
      ],
    };

    const [data, total] = await Promise.all([
      prisma.planInterested.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { created_at: "desc" },
      }),
      prisma.planInterested.count({ where }),
    ]);

    res.json({
      success: true,
      data,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
        hasNextPage: skip + data.length < total,
        hasPrevPage: Number(page) > 1,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch interested users",
    });
  }
};

/**
 * ✅ DELETE Plan Interested (Hard Delete)
 */
exports.deletePlanInterested = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.planInterested.delete({
      where: { plan_interested_id: Number(id) },
    });

    res.json({
      success: true,
      message: "Interested record deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete record",
    });
  }
};


