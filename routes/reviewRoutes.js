// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route for adding a review
router.post('/games/:gameId/reviews', authenticateUser, reviewController.addReview);

// Route for getting reviews by game ID
router.get('/games/:gameId/reviews', reviewController.getReviewsByGameId);

module.exports = router;
