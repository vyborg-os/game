// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateAdmin } = require('../middlewares/authMiddleware');
const multer = require("multer");

// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/') 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});  
  
// Initialize multer with the specified storage
const upload = multer({ storage: storage });


// Route for admin login
router.post('/login', adminController.adminLogin);
router.post('/signup', adminController.adminReg);

// Protected routes for admin functionalities
router.post('/games/add',  upload.single('image'), adminController.addGame);
router.put('/games/:id', upload.single('image'), adminController.updateGame);
router.get('/games', adminController.getAllGames);
router.delete('/games/:id', adminController.deleteGame);
router.delete('/reviews/:id', adminController.deleteReview);
module.exports = router;