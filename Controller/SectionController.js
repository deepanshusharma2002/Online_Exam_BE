const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');

exports.createSection = async (req, res) => {
    try {
        const { display_name, url, seo_title, seo_keywords, seo_published_date, seo_description, created_by } = req.body;
        let img_url = req.file ? `/uploads/images/${req.file.filename}` : null;

        if (!display_name || !url) {
            return res.status(400).json({ success: false, message: 'Display name and URL are required.' });
        }

        const section = await prisma.section.create({
            data: {
                display_name,
                url: url?.toLowerCase(),
                seo_title, seo_keywords, seo_published_date: new Date(seo_published_date), seo_description,
                img_url,
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

exports.getAllSection = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // current page
        const limit = parseInt(req.query.limit) || 10; // items per page
        const skip = (page - 1) * limit;

        // Optional filters
        const { section_id, status, section, type } = req.query;
        if (type && type === 'sitemap') {
            let filter = {
                status: 1,
            };

            const sections = await prisma.section.findMany({
                where: filter,
                select: {
                    url: true,
                    createdAt: true,
                    updatedAt: true,
                },
                orderBy: {
                    updatedAt: "desc",
                },
            });

            return res.status(200).json({
                success: true,
                data: sections,
            });
        } else {
            let filter = {
                status: {
                    not: 0,
                },
            };

            if (section_id) filter.section_id = Number(section_id);
            if (section) filter.url = section;
            if (status !== undefined) filter.status = Number(status);

            // Fetch data and total count simultaneously
            const [sections, totalCount] = await Promise.all([
                prisma.section.findMany({
                    skip,
                    take: limit,
                    where: filter,
                    orderBy: { section_id: "desc" },
                }),
                prisma.section.count({
                    where: filter,
                }),
            ]);

            // Pagination metadata
            const totalPages = Math.ceil(totalCount / limit);

            return res.status(200).json({
                success: true,
                data: sections,
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
        console.error("Error fetching sections:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

exports.getSectionById = async (req, res) => {
    try {
        const { id } = req.params;

        const section = await prisma.section.findUnique({
            where: { section_id: Number(id) },
        });

        if (!section || section.status === 0) {
            return res.status(404).json({ message: 'Section not found.' });
        }

        return res.status(200).json({ section });
    } catch (error) {
        console.error('Error fetching section by ID:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

exports.updateSection = async (req, res) => {
    try {
        const { id } = req.params;
        const { display_name, url, seo_title, seo_keywords, seo_published_date, seo_description, status } = req.body;
        const newImagePath = req.file ? `/uploads/images/${req.file.filename}` : undefined;

        // Fetch the existing section
        const existingSection = await prisma.section.findUnique({
            where: { section_id: Number(id) },
        });

        if (!existingSection) {
            return res.status(404).json({ success: false, message: 'Section not found.' });
        }

        // ✅ Delete old image if new image uploaded
        if (req.file && existingSection.img_url) {
            const oldImagePath = path.join(__dirname, '..', existingSection.img_url);
            fs.unlink(oldImagePath, (err) => {
                if (err && err.code !== 'ENOENT') {
                    console.error('Error deleting old image:', err);
                }
            });
        }

        // ✅ Update section details
        const updatedSection = await prisma.section.update({
            where: { section_id: Number(id) },
            data: {
                display_name: display_name || existingSection.display_name,
                url: url?.toLowerCase() || existingSection.url,
                seo_title: seo_title || existingSection.seo_title,
                seo_keywords: seo_keywords || existingSection.seo_keywords,
                seo_published_date: new Date(seo_published_date) || existingSection.seo_published_date,
                seo_description: seo_description || existingSection.seo_description,
                img_url: newImagePath || existingSection.img_url,
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

exports.deleteSection = async (req, res) => {
    try {
        const { id } = req.params;

        const existingSection = await prisma.section.findUnique({
            where: { section_id: Number(id) },
        });

        if (!existingSection) {
            return res.status(404).json({ success: false, message: 'Section not found.' });
        }

        await prisma.section.delete({
            where: { section_id: Number(id) },
        });

        return res.status(200).json({ success: true, message: 'Section deleted successfully.' });
    } catch (error) {
        console.error('Error deleting section:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};
