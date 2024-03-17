// models/Game.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');
const bcrypt = require('bcryptjs');

// const User = db.define('User', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   genre: {
//     type: DataTypes.STRING
//   },
//   releaseDate: {
//     type: DataTypes.DATE
//   },
//   // Add more fields as needed
// });
const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Hash password before saving user
User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});


module.exports = User;
