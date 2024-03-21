// controllers/adminController.js
const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Game = require('../models/Games');

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
    const token = jwt.sign({ adminId: admin.id }, 'your_secret_key', { expiresIn: '1h' });

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
  
// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/') 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

// Initialize multer with the specified storage
const upload = multer({ storage: storage });

// Add a new game with image upload
exports.addGame = upload.single('image'), async (req, res) => {
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

// Update a game with image upload
exports.updateGame = upload.single('image'), async (req, res) => {
    const gameId = req.params.id;
    const { title, category, details, releaseDate } = req.body;
    const image = req.file.path; // Get the path of the uploaded image

    try {
        const game = await Game.findByPk(gameId);
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
    const gameId = req.params.id;
  
    try {
      const game = await Game.findByPk(gameId);
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
  
  