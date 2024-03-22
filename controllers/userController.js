// routes/authRoutes.js

const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const User = require('../models/User');



exports.userLogin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if admin exists
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(401).json({ error: 'Invalid Username' });
      }
  
      // Verify password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, '123456789', { expiresIn: '1h' });
  
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  // Route for user signup
  exports.userReg = async (req, res) => {
      const { username, email, password } = req.body;
    
      try {
        // Check if admin already exists
        const user = await User.findOne({ where: { email } });
        if (user) {
          return res.status(400).json({ error: 'User already exists' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create new admin
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword
        });
    
        res.status(201).json(newUser);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
    };
  
