// controllers/adminController.js

const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Game = require('../models/Games');
const Review = require('../models/Review');

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ adminId: admin.id }, '123456789', { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Route for user signup
exports.adminReg = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Check if admin already exists
      const admin = await Admin.findOne({ where: { username } });
      if (admin) {
        return res.status(400).json({ error: 'Admin already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new admin
      const newAdmin = await Admin.create({
        username,
        password: hashedPassword
      });
  
      res.status(201).json(newAdmin);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
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
exports.addGame =  async (req, res) => {
  console.log(req.body)
  console.log(req.file)
  const { title, category, details, releaseDate } = req.body;
  const image = req.file.path; // Get the path of the uploaded image

  try {
      const newGame = await Game.create({ title, category, details, image, releaseDate });
      res.json(newGame);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a game
exports.updateGame =  async (req, res) => {
  const id = req.params.id;
  const { title, category, details, releaseDate } = req.body;
  const image = req.file.path; // Get the path of the uploaded image

  try {
      const game = await Game.findByPk(id);
      if (!game) {
          return res.status(404).json({ error: 'Game not found' });
      }

      game.title = title;
      game.category = category;
      game.details = details;
      game.image = image;
      game.releaseDate = releaseDate;

      await game.save();

      res.json(game);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  }
};
  
  // Delete a game
  exports.deleteGame = async (req, res) => {
    const id = req.params.id;
  
    try {
      const game = await Game.findByPk(id);
      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }
  
      await game.destroy();
  
      res.json({ message: 'Game deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Delete a review
  exports.deleteReview = async (req, res) => {
    const id = req.params.id;
    try {
      const review = await Review.findByPk(id);
      if (!review) {
        return res.status(404).json({ error: 'Review not found' });
      }
  
      await review.destroy();
  
      res.json({ message: 'Review deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };