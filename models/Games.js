// models/Game.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Game = sequelize.define('Game', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING
  },
  details: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
  releaseDate: {
    type: DataTypes.DATEONLY
  } }, {
    tableName: 'games'
  });

module.exports = Game;
