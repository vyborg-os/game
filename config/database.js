// config/database.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'games',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('games', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = sequelize;
