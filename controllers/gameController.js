// controllers/gameController.js

const Game = require('../models/Games');

exports.getAllGames = async (req, res) => {
    try {
      const game = await Game.findAll();
      res.json(game);
    } catch (err) {
      console.error(err); // Log the error to the console
      res.status(500).json({ error: 'Internal server error' });
    }
  };
