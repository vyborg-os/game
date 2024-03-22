// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Route for adding a review
router.post('/games/:gameID/reviews/:userID/:star_rating/:reviews', reviewController.addReview);

// Route for getting reviews by game ID
router.get('/games/:gameID/reviews', reviewController.getReviewsByGameId);

module.exports = router;
