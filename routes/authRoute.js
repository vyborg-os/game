// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route for admin login
router.post('/login', userController.userLogin);
router.post('/signup', userController.userReg);

module.exports = router;