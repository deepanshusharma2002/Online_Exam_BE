const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createHomeText = async (req, res) => {
    try {
        const { heading1, heading2, seo_title, seo_keywords, seo_published_date, seo_description, created_by } = req.body;

        const section = await prisma.homeText.create({
            data: {
                heading1,
                heading2,
                seo_title, seo_keywords, seo_published_date: new Date(seo_published_date), seo_description,
                status: 1,
                created_by: created_by || null,
            },
        });

        return res.status(201).json({ success: true, message: 'Government Jobs created successfully.', section });
    } catch (error) {
        console.error('Error creating government jobs:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

exports.getAllHomeText = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // current page
        const limit = parseInt(req.query.limit) || 10; // items per page
        const skip = (page - 1) * limit;

        // Optional filters
        const { home_text_id, status } = req.query;
        let filter = {
            status: {
                not: 0,
            },
        };

        if (home_text_id) filter.home_text_id = Number(home_text_id);
        if (status !== undefined) filter.status = Number(status);

        // Fetch data and total count simultaneously
        const [homeLinks, totalCount] = await Promise.all([
            prisma.homeText.findMany({
                skip,
                take: limit,
                where: filter,
                orderBy: { home_text_id: "desc" },
            }),
            prisma.homeText.count({
                where: filter,
            }),
        ]);

        // Pagination metadata
        const totalPages = Math.ceil(totalCount / limit);

        return res.status(200).json({
            success: true,
            data: homeLinks,
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
        console.error("Error fetching Home Links:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

exports.updateHomeText = async (req, res) => {
    try {
        const { id } = req.params;
        const { heading1, heading2, seo_title, seo_keywords, seo_published_date, seo_description, status } = req.body;

        const existingSection = await prisma.homeText.findUnique({
            where: { home_text_id: Number(id) },
        });

        if (!existingSection) {
            return res.status(404).json({ success: false, message: 'Government Jobs not found.' });
        }

        const updatedSection = await prisma.homeText.update({
            where: { home_text_id: Number(id) },
            data: {
                heading1: heading1 || existingSection.heading1,
                heading2: heading2 || existingSection.heading2,
                seo_title: seo_title || existingSection.seo_title,
                seo_keywords: seo_keywords || existingSection.seo_keywords,
                seo_published_date: new Date("2025-10-25") || existingSection.seo_published_date,
                seo_description: seo_description || existingSection.seo_description,
                status: status !== undefined ? Number(status) : existingSection.status,
                updated_by: req.user?.id || null,
            },
        });

        return res
            .status(200)
            .json({ success: true, message: 'Government Jobs updated successfully.', section: updatedSection });
    } catch (error) {
        console.error('Error updating government jobs:', error);
        return res
            .status(500)
            .json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

exports.deleteHomeText = async (req, res) => {
    try {
        const { id } = req.params;

        const existingSection = await prisma.homeText.findUnique({
            where: { home_text_id: Number(id) },
        });

        if (!existingSection) {
            return res.status(404).json({ success: false, message: 'Government Jobs not found.' });
        }

        await prisma.homeText.delete({
            where: { home_text_id: Number(id) },
        });

        return res.status(200).json({ success: true, message: 'Government Jobs deleted successfully.' });
    } catch (error) {
        console.error('Error deleting Government Jobs:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};
