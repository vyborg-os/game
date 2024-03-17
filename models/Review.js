// models/Game.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Review = db.define('Review', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING
  },
  releaseDate: {
    type: DataTypes.DATE
  },
  // Add more fields as needed
});

module.exports = Review;
