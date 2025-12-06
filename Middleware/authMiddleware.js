const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Replace with your JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'sharma';

const verifyUser = async (req, res, next) => {
  try {
    // Get token from headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Authorization token missing' });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    // Fetch user from DB (optional but recommended)
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true, role: true, status: true },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    req.user = user;
    req.body = req.body || {};
    req.body.created_by = user.id;
    req.body.updated_by = user.id;

    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: 'Unauthorized', error: error.message });
  }
};

module.exports = verifyUser;
