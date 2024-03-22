// models/Game.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Review = db.define('Review', {
  userID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gameID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  star_rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reviews: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Review;
