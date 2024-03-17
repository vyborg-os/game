const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const gameRoutes = require('./routes/gameRoute');
const authRoutes = require('./routes/authRoute');

const app = express();
const PORT = process.env.PORT || 3000;


// app.use(bodyParser.json());
app.use(express.json());

// Mount game routes
app.use('/api', gameRoutes);

// Mount authentication routes
app.use('/api/auth', authRoutes);

// Define routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

