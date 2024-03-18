// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

exports.authenticateAdmin = (req, res, next) => {
  // Get token from headers
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, 'your_secret_key');

    // Add admin to request object
    req.admin = decoded.adminId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};