// models/Game.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// const { DataTypes } = require('sequelize');
// const db = require('../config/database');

const Game = sequelize.define('Game', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING
  },
  releaseDate: {
    type: DataTypes.DATE
  } }, {
    tableName: 'games' // Explicitly specify the table name
  });

module.exports = Game;
