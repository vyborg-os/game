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

// Add a new game
// exports.addGame = async (req, res) => {
//   const { title, genre, releaseDate } = req.body;

//   try {
//     const newGame = await Game.create({ title, genre, releaseDate });
//     res.json(newGame);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Update a game
// exports.updateGame = async (req, res) => {
//   const gameId = req.params.id;
//   const { title, genre, releaseDate } = req.body;

//   try {
//     const game = await Game.findByPk(gameId);
//     if (!game) {
//       return res.status(404).json({ error: 'Game not found' });
//     }

//     game.title = title;
//     game.genre = genre;
//     game.releaseDate = releaseDate;

//     await game.save();

//     res.json(game);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Delete a game
// exports.deleteGame = async (req, res) => {
//   const gameId = req.params.id;

//   try {
//     const game = await Game.findByPk(gameId);
//     if (!game) {
//       return res.status(404).json({ error: 'Game not found' });
//     }

//     await game.destroy();

//     res.json({ message: 'Game deleted successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
