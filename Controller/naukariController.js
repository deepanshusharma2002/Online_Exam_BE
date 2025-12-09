const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createNaukari = async (req, res) => {
  try {
    const {
      title,
      class: StudentClass,
      subject,
      status,
      description,
      importantQuesAns,
      created_by
    } = req.body;

    const naukari = await prisma.naukari.create({
      data: {
        title,
        slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        class: Number(StudentClass),
        subject,
        description,
        status,
        created_by,
        importantQuesAns: {
          create: importantQuesAns.map(q => ({
            question: q.question,
            answer: q.answer
          }))
        },
      },
      include: {
        importantQuesAns: true,
      }
    });

    res.status(201).json({ success: true, data: naukari });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟣 Get all Naukari
// const getAllNaukari = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;

//     const { naukari_id, slug, class: StudentClass, subject } = req.query;

//     let filter = {
//       status: {
//         not: 0,
//       },
//     };

//     let orderBy = [{ createdAt: "desc" }];

//     if (naukari_id) filter.naukari_id = Number(naukari_id);
//     if (slug) {
//       filter.slug = slug?.split("~")[0];
//       filter.naukari_id = Number(slug?.split("~")[1]);
//     };
//     if(StudentClass && subject){
//       filter.class = Number(StudentClass);
//       filter.subject = subject;
//     }
//     if(StudentClass && !subject){
//       filter.class = Number(StudentClass);
//     }
//     if(!StudentClass && subject){
//       filter.subject = subject;
//     }

//     // Calculate skip value
//     const skip = (page - 1) * limit;

//     const [naukaries, totalCount] = await Promise.all([
//       prisma.naukari.findMany({
//         skip,
//         take: limit,
//         orderBy,
//         where: filter,
//         include: naukari_id || slug ? {
//           importantQuesAns: true,
//         } : {},

//       }),
//       prisma.naukari.count({
//         where: filter,
//       }),
//     ]);

//     // Calculate total pages
//     const totalPages = Math.ceil(totalCount / limit);

//     return res.status(200).json({
//       success: true,
//       data: naukaries,
//       pagination: {
//         totalItems: totalCount,
//         totalPages,
//         currentPage: page,
//         pageSize: limit,
//         hasNextPage: page < totalPages,
//         hasPrevPage: page > 1,
//       },
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch naukaries",
//       error: error.message,
//     });
//   }
// };
const getAllNaukari = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const {
      naukari_id,
      slug,
      class: StudentClass,
      subject
    } = req.query;

    let filter = {
      status: { not: 0 },
    };

    const orderBy = [{ createdAt: "desc" }];

    // Search by ID
    if (naukari_id) {
      filter.naukari_id = Number(naukari_id);
    }

    // Search by slug~id
    if (slug) {
      const [slugValue, id] = slug.split("~");
      filter.slug = slugValue;
      filter.naukari_id = Number(id);
    }

    // ✅ Search by class
    if (StudentClass) {
      filter.class = Number(StudentClass);
    }

    // ✅ Search by subject (case-insensitive)
    if (subject) {
      filter.subject = {
        equals: subject,
        mode: "insensitive",
      };
    }

    const skip = (page - 1) * limit;

    const [naukaries, totalCount] = await Promise.all([
      prisma.naukari.findMany({
        skip,
        take: limit,
        orderBy,
        where: filter,
        include: naukari_id || slug
          ? { importantQuesAns: true }
          : {},
      }),
      prisma.naukari.count({ where: filter }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return res.status(200).json({
      success: true,
      data: naukaries,
      pagination: {
        totalItems: totalCount,
        totalPages,
        currentPage: page,
        pageSize: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch naukaries",
      error: error.message,
    });
  }
};

// 🟡 Get Naukari by ID
const getNaukariById = async (req, res) => {
  try {
    const { id } = req.params;
    const naukari = await prisma.naukari.findUnique({ where: { id: Number(id) } });

    if (!naukari)
      return res.status(404).json({ success: false, message: "Naukari not found" });

    return res.status(200).json({ success: true, data: naukari });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to fetch naukari", error });
  }
};

const updateNaukari = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    class: StudentClass,
    subject,
    status,
    description,
    importantQuesAns,
    updated_by
  } = req.body;

  const naukariId = Number(id);

  try {
    const updatedNaukari = await prisma.$transaction(async (tx) => {
      // 1️⃣ Update main Naukari
      await tx.naukari.update({
        where: { naukari_id: naukariId },
        data: {
          title,
          slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
          class: Number(StudentClass),
          subject,
          description,
          status,
          updated_by
        }
      });

      // 2️⃣ Replace Important Q&A
      if (importantQuesAns) {
        await tx.importantQuesAns.deleteMany({ where: { naukari_id: naukariId } });
        if (importantQuesAns.length > 0) {
          await tx.importantQuesAns.createMany({
            data: importantQuesAns.map(q => ({
              question: q.question,
              answer: q.answer,
              naukari_id: naukariId
            }))
          });
        }
      }

      // 5️⃣ Return updated record with nested relations
      return tx.naukari.findUnique({
        where: { naukari_id: naukariId },
        include: {
          importantQuesAns: true
        }
      });
    });

    res.status(200).json({ success: true, data: updatedNaukari });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteNaukari = async (req, res) => {
  try {
    const { id } = req.params;
    const naukariId = Number(id);

    // Delete the Naukari record. All related records will be deleted automatically
    await prisma.naukari.delete({
      where: { naukari_id: naukariId }
    });

    return res.status(200).json({
      success: true,
      message: "Naukari and all related records deleted successfully"
    });
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return res.status(404).json({ success: false, message: "Naukari not found" });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to delete Naukari",
      error: error.message
    });
  }
};



module.exports = {
  createNaukari,
  getAllNaukari,
  getNaukariById,
  updateNaukari,
  deleteNaukari,
};
