// routes/gameRoutes.js

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Route to fetch all games
router.get('/games', gameController.getAllGames);

// Route for getting reviews by game ID
router.get('/games/:id', gameController.getGamesByGameId);

module.exports = router;


