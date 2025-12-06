const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createNaukari = async (req, res) => {
  try {
    const {
      title,
      isResult,
      isAdmitCard,
      isNewPost,
      postDate,
      slug,
      description,
      seo_title,
      seo_keywords,
      seo_published_date,
      seo_description,
      seo_section,
      seo_sub_section,
      seo_category,
      importantQuesAns,
      usefulLinks,
      discoverMoreLinks,
      created_by
    } = req.body;

    // ✅ Use Prisma transaction to create main + related records
    const naukari = await prisma.naukari.create({
      data: {
        title,
        isResult,
        isAdmitCard,
        postDate: new Date(postDate),
        slug,
        description,
        seo_title,
        seo_keywords,
        seo_published_date: new Date(seo_published_date),
        seo_description,
        seo_section: seo_section?.toLowerCase(),
        seo_sub_section: seo_sub_section?.toLowerCase(),
        seo_category: seo_category?.toLowerCase(),
        status: isNewPost ? 2 : 1,
        created_by,
        importantQuesAns: {
          create: importantQuesAns.map(q => ({
            question: q.question,
            answer: q.answer
          }))
        },
        usefulLinks: {
          create: usefulLinks.map(section => ({
            text: section.text,
            links: {
              create: section.links.map(link => ({
                display_name: link.display_name,
                url: link.url
              }))
            }
          }))
        },
        discoverMoreLinks: {
          create: discoverMoreLinks.map(link => ({
            display_name: link.display_name,
            url: link.url
          }))
        }
      },
      include: {
        importantQuesAns: true,
        usefulLinks: { include: { links: true } },
        discoverMoreLinks: true
      }
    });

    res.status(201).json({ success: true, data: naukari });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟣 Get all Naukari
const getAllNaukari = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { naukari_id, slug, type, category, sub_section, section, search } = req.query;
    if (type && type === 'sitemap') {

      const naukari = await prisma.naukari.findMany({
        select: {
          seo_section: true,
          slug: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          updatedAt: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        data: naukari,
      });
    } else {
      let filter = {
        status: {
          not: 0,
        },
      };

      let orderBy = [{ createdAt: "desc" }];

      if (naukari_id) filter.naukari_id = Number(naukari_id);
      if (section && !category) filter.seo_section = section;
      if (slug) filter.slug = slug;
      if (category && !slug) {
        filter.seo_category = category;
        if (section) {
          filter.seo_section = section;
          if (sub_section) {
            filter.seo_sub_section = sub_section;
          }
        }
      }
      if (type) {
        if (type === "admit_card") filter.isAdmitCard = true;
        else if (type === "result") filter.isResult = true;
        else if (type === "new") filter.status = 2;
        else if (type === "priority") {
          filter.priority = {
            not: null,
          };
          orderBy = [
            { priority: "asc" },
          ];
        }
        else if (type === "null_priority") filter.priority = null;
        else if (type === "latest-jobs") {
          filter.isAdmitCard = false;
          filter.isResult = false;
        }
      }

      if (search && search.trim() !== "") {
        const searchQuery = search.trim();

        filter.OR = [
          { seo_category: { contains: searchQuery, mode: "insensitive" } },
          { seo_sub_section: { contains: searchQuery, mode: "insensitive" } },
          { seo_title: { contains: searchQuery, mode: "insensitive" } },
          { seo_keywords: { contains: searchQuery, mode: "insensitive" } },
          { title: { contains: searchQuery, mode: "insensitive" } },
        ];
      }

      // Calculate skip value
      const skip = (page - 1) * limit;

      if (["admit_card", "result", "latest-jobs"].includes(type)) {
        orderBy = [
          { priority: "asc" },
          { createdAt: "desc" },
        ];
      }

      // Fetch paginated data and total count
      const [naukaries, totalCount] = await Promise.all([
        prisma.naukari.findMany({
          skip,
          take: limit,
          orderBy,
          where: filter,
          include: naukari_id || slug ? {
            importantQuesAns: true,
            discoverMoreLinks: true,
            usefulLinks: {
              include: {
                links: true,
              },
            },
          } : {},

        }),
        prisma.naukari.count({
          where: filter,
        }),
      ]);

      // Calculate total pages
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
    }
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

const setPriorityNaukari = async (req, res) => {
  const { items } = req.body;

  try {
    await prisma.naukari.updateMany({
      where: {
        priority: { not: null },
      },
      data: {
        priority: null,
      },
    });

    await Promise.all(
      items.map((item, index) =>
        prisma.naukari.update({
          where: { naukari_id: Number(item.naukari_id) },
          data: { priority: index + 1 },
        })
      )
    );

    res.status(200).json({ success: true, message: "Priorities updated successfully" });
  } catch (error) {
    console.error("Error updating priorities:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateNaukari = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    isResult,
    isAdmitCard,
    isNewPost,
    postDate,
    slug,
    description,
    seo_title,
    seo_keywords,
    seo_published_date,
    seo_description,
    seo_section,
    seo_sub_section,
    seo_category,
    importantQuesAns,
    usefulLinks,
    discoverMoreLinks,
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
          isResult,
          isAdmitCard,
          postDate: postDate ? new Date(postDate) : undefined,
          slug,
          description,
          seo_title,
          seo_keywords,
          seo_published_date: seo_published_date ? new Date(seo_published_date) : undefined,
          seo_description,
          seo_section: seo_section?.toLowerCase(),
          seo_sub_section: seo_sub_section?.toLowerCase(),
          seo_category: seo_category?.toLowerCase(),
          status: isNewPost ? 2 : 1,
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

      // 3️⃣ Replace Useful Links
      if (usefulLinks) {
        const existingLinks = await tx.usefulLinkSection.findMany({ where: { naukari_id: naukariId }, include: { links: true } });
        for (const section of existingLinks) {
          await tx.usefulLink.deleteMany({ where: { section_id: section.id } });
        }
        await tx.usefulLinkSection.deleteMany({ where: { naukari_id: naukariId } });

        for (const section of usefulLinks) {
          await tx.usefulLinkSection.create({
            data: {
              text: section.text,
              naukari_id: naukariId,
              links: {
                create: section.links.map(link => ({
                  display_name: link.display_name,
                  url: link.url
                }))
              }
            }
          });
        }
      }

      // 4️⃣ Replace Discover More Links
      if (discoverMoreLinks) {
        await tx.discoverMore.deleteMany({ where: { naukari_id: naukariId } });
        if (discoverMoreLinks.length > 0) {
          await tx.discoverMore.createMany({
            data: discoverMoreLinks.map(link => ({
              display_name: link.display_name,
              url: link.url,
              naukari_id: naukariId
            }))
          });
        }
      }

      // 5️⃣ Return updated record with nested relations
      return tx.naukari.findUnique({
        where: { naukari_id: naukariId },
        include: {
          importantQuesAns: true,
          usefulLinks: { include: { links: true } },
          discoverMoreLinks: true
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
  setPriorityNaukari
};
