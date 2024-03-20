// controllers/reviewController.js

const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const { gameID } = req.params;
  const { userID, reviews } = req.body;

  try {
    const newReview = await Review.create({ gameID, userID, reviews });
    res.json(newReview);
  } catch (err) {
    console.error(err);
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
