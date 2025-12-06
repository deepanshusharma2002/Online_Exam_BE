const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createGovernmentJobs = async (req, res) => {
    try {
        const { title, department, location, posts, url, last_date, created_by } = req.body;

        if (!title || !department || !url) {
            return res.status(400).json({ success: false, message: 'title name and department are required.' });
        }

        const section = await prisma.governmentLinks.create({
            data: {
                title,
                department,
                location,
                url,
                posts: posts !== undefined ? Number(posts) : null,
                last_date: new Date(last_date),
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

exports.getAllGovernmentJobs = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // current page
        const limit = parseInt(req.query.limit) || 10; // items per page
        const skip = (page - 1) * limit;

        // Optional filters
        const { government_links_id, status } = req.query;
        let filter = {
            status: {
                not: 0,
            },
        };

        if (government_links_id) filter.government_links_id = Number(government_links_id);
        if (status !== undefined) filter.status = Number(status);

        // Fetch data and total count simultaneously
        const [homeLinks, totalCount] = await Promise.all([
            prisma.governmentLinks.findMany({
                skip,
                take: limit,
                where: filter,
                orderBy: { government_links_id: "desc" },
            }),
            prisma.governmentLinks.count({
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

exports.updateGovernmentJobs = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, department, url, location, posts, last_date, status } = req.body;

        const existingSection = await prisma.governmentLinks.findUnique({
            where: { government_links_id: Number(id) },
        });

        if (!existingSection) {
            return res.status(404).json({ success: false, message: 'Government Jobs not found.' });
        }

        const updatedSection = await prisma.governmentLinks.update({
            where: { government_links_id: Number(id) },
            data: {
                title: title || existingSection.title,
                department: department || existingSection.department,
                location: location || existingSection.location,
                posts: posts !== undefined ? Number(posts) : existingSection.posts,
                last_date: last_date ? new Date(last_date) : existingSection.last_date,
                url: url || existingSection.url,
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

exports.deleteGovernmentJobs = async (req, res) => {
    try {
        const { id } = req.params;

        const existingSection = await prisma.governmentLinks.findUnique({
            where: { government_links_id: Number(id) },
        });

        if (!existingSection) {
            return res.status(404).json({ success: false, message: 'Government Jobs not found.' });
        }

        await prisma.governmentLinks.delete({
            where: { government_links_id: Number(id) },
        });

        return res.status(200).json({ success: true, message: 'Government Jobs deleted successfully.' });
    } catch (error) {
        console.error('Error deleting Government Jobs:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};
