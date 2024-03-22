// // middlewares/authMiddleware.js

// const jwt = require('jsonwebtoken');

// exports.authenticateAdmin = (req, res, next) => {
//   // Get token from headers
//   const token = req.header('Authorization');

//   // Check if token is present
//   if (!token) {
//     return res.status(401).json({ error: 'Access denied. No token provided' });
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, '123456789');

//     // Add admin to request object
//     req.admin = decoded.adminId;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };
// exports.authenticateUser = (req, res, next) => {
//     // Get token from headers
//     const token = req.header('Authorization');
  
//     // Check if token is present
//     if (!token) {
//       return res.status(401).json({ error: 'Access denied. No token provided' });
//     }
  
//     try {
//       // Verify token
//       const decoded = jwt.verify(token, '123456789');
  
//       // Add admin to request object
//       req.user = decoded.userId;
//       next();
//     } catch (err) {
//       res.status(401).json({ error: 'Invalid token' });
//     }
//   };

const jwt = require('jsonwebtoken');
const cors = require('cors');

// Enable CORS for all routes
exports.enableCors = cors();

exports.authenticateAdmin = (req, res, next) => {
  // Get token from headers
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, '123456789');

    // Add admin to request object
    req.admin = decoded.adminId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

exports.authenticateUser = (req, res, next) => {
  // Get token from headers
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, '123456789');

    // Add user to request object
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
