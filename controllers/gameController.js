// controllers/gameController.js

const Game = require('../models/Games');

// Get all games
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getGamesByGameId = async (req, res) => {
  const { id } = req.params;

  try {
    const games = await Game.findAll({ where: { id } });
    res.json(games);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};