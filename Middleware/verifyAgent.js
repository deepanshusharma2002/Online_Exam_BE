const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const JWT_SECRET_student = process.env.JWT_SECRET_student;

const verifyAgent = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Authorization token missing' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, JWT_SECRET_student);
    if (!decoded) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }
    const student = await prisma.student.findUnique({
      where: { student_id: decoded.student_id },
    });

    if (!student) {
      return res.status(404).json({ success: false, message: 'student not found' });
    }

    req.student = student;
    req.body = req.body || {};
    req.body.created_by = student.student_id;
    req.body.updated_by = student.student_id;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: 'Unauthorized', error: error.message });
  }
};

module.exports = verifyAgent;
