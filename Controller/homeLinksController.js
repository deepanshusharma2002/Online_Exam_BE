const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createHomeLinks = async (req, res) => {
    try {
        const { display_name, url, type, created_by } = req.body;

        if (!display_name || !url) {
            return res.status(400).json({ success: false, message: 'Display name and URL are required.' });
        }

        const section = await prisma.homeLinks.create({
            data: {
                display_name,
                url,
                type: type || null,
                status: 1,
                created_by: created_by || null,
            },
        });

        return res.status(201).json({ success: true, message: 'Section created successfully.', section });
    } catch (error) {
        console.error('Error creating section:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

exports.getAllHomeLinks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // current page
        const limit = parseInt(req.query.limit) || 10; // items per page
        const skip = (page - 1) * limit;

        // Optional filters
        const { home_links_id, status, type } = req.query;
        let filter = {
            status: {
                not: 0,
            },
        };

        if (home_links_id) filter.home_links_id = Number(home_links_id);
        if (status !== undefined) filter.status = Number(status);
        if (type !== undefined) filter.type = type;

        // Fetch data and total count simultaneously
        const [homeLinks, totalCount] = await Promise.all([
            prisma.homeLinks.findMany({
                skip,
                take: limit,
                where: filter,
                orderBy: { home_links_id: "desc" },
            }),
            prisma.homeLinks.count({
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

exports.updateHomeLinks = async (req, res) => {
    try {
        const { id } = req.params;
        const { display_name, url, type, status } = req.body;

        // Fetch the existing section
        const existingSection = await prisma.homeLinks.findUnique({
            where: { home_links_id: Number(id) },
        });

        if (!existingSection) {
            return res.status(404).json({ success: false, message: 'Section not found.' });
        }

        // ✅ Update section details
        const updatedSection = await prisma.homeLinks.update({
            where: { home_links_id: Number(id) },
            data: {
                display_name: display_name || existingSection.display_name,
                url: url || existingSection.url,
                type: type !== undefined ? type : existingSection?.type,
                status: status !== undefined ? Number(status) : existingSection.status,
                updated_by: req.user?.id || null,
            },
        });

        return res
            .status(200)
            .json({ success: true, message: 'Section updated successfully.', section: updatedSection });
    } catch (error) {
        console.error('Error updating section:', error);
        return res
            .status(500)
            .json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

exports.deleteHomeLinks = async (req, res) => {
    try {
        const { id } = req.params;

        const existingSection = await prisma.homeLinks.findUnique({
            where: { home_links_id: Number(id) },
        });

        if (!existingSection) {
            return res.status(404).json({ success: false, message: 'Section not found.' });
        }

        await prisma.homeLinks.delete({
            where: { home_links_id: Number(id) },
        });

        return res.status(200).json({ success: true, message: 'Section deleted successfully.' });
    } catch (error) {
        console.error('Error deleting section:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};
