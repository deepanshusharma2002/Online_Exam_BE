const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const naukariRoutes = require('./Routes/naukariRoutes');
const sectionRoutes = require('./Routes/sectionRoutes');
const homeLinksRoutes = require('./Routes/homeLinksRoutes');
const governmentJobsRoutes = require('./Routes/governmentJobsRoutes');
const app = express();
const path = require("path");
const { PrismaClient } = require('@prisma/client');
const verifyUser = require('./Middleware/authMiddleware');
const prisma = new PrismaClient();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Health Check
app.get("/", (req, res) => {
    res.send("🚀 Node.js + Express + Prisma + PostgreSQL is running!");
});

const studentRoutes = require("./Routes/studentRoutes");
app.use("/api/student", studentRoutes);

const studentQuesAnsRoutes = require("./Routes/studentQuesAnsRoutes");
app.use("/api/student/question-answer", studentQuesAnsRoutes);


app.use("/api/user", userRoutes);
app.use('/api/naukari', naukariRoutes);
app.use('/api/section', sectionRoutes);
app.use('/api/home/links', homeLinksRoutes);
app.use('/api/government/jobs', governmentJobsRoutes);

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message, subject } = req.body;

        const newContact = await prisma.contactUs.create({
            data: {
                name,
                email,
                message,
                subject
            },
        });

        return res.status(201).json({
            success: true,
            message: "Contact message submitted successfully.",
            contact: newContact,
        });
    } catch (error) {
        console.error("Error submitting contact message:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

app.get("/api/contact", verifyUser, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalCount = await prisma.contactUs.count();

        const contacts = await prisma.contactUs.findMany({
            skip,
            take: limit,
            orderBy: { contact_us_id: "desc" },
        });

        res.json({
            success: true,
            page,
            limit,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            data: contacts,
        });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.delete("/api/contact/:id", verifyUser, async (req, res) => {
    try {
        const { id } = req.params;

        const deletedContact = await prisma.contactUs.delete({
            where: { contact_us_id: parseInt(id) },
        });

        res.json({
            success: true,
            message: "Contact message deleted successfully.",
            contact: deletedContact,
        });
    } catch (error) {
        console.error("Error deleting contact message:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// ✅ Server listen
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
