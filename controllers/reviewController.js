// controllers/reviewController.js

const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const { gameID } = req.params;
  const { userID, star_rating, reviews } = req.body

  console.log('Request Body:', req.body); // Log request body for debugging

  try {
    // Validate request body
    if (!userID || !star_rating || !reviews) {
      return res.status(400).json({ 
        error: 'Missing required fields', 
        userID: userID,
        star_rating: star_rating,
        reviews: reviews,
        gameID: gameID
      });
    }else{
      const newReview = await Review.create({ gameID, userID, star_rating, reviews });
      res.json(newReview);
    }
  } catch (err) {
    console.error('Error adding review:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.getReviewsByGameId = async (req, res) => {
  const { gameID } = req.params;

  try {
    const reviews = await Review.findAll({ where: { gameID } });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
