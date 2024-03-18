// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateAdmin } = require('../middlewares/authMiddleware');

// Route for admin login
router.post('/login', adminController.adminLogin);
router.post('/signup', adminController.adminReg);

// Protected routes for admin functionalities
router.post('/games', authenticateAdmin, adminController.addGame);
router.put('/games/:id', authenticateAdmin, adminController.updateGame);
router.get('/games', authenticateAdmin, adminController.getAllGames);
router.delete('/games/:id', authenticateAdmin, adminController.deleteGame);

module.exports = router;