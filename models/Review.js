// models/Game.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Review = db.define('Review', {
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gameID: {
    type: DataTypes.INTEGER
  },
  reviews: {
    type: DataTypes.STRING
  },
  // Add more fields as needed
});

module.exports = Review;
