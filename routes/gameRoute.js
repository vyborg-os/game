// routes/gameRoutes.js

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Route to fetch all games
router.get('/games', gameController.getAllGames);

module.exports = router;


