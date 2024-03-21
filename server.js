const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const gameRoutes = require('./routes/gameRoute');
const authRoutes = require('./routes/authRoute');
const adminRoutes = require('./routes/adminRoute');
const reviewRoutes = require('./routes/reviewRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Allow all origins during development
app.use(cors());

// app.use(bodyParser.json());
app.use(express.json());

// Mount game routes
app.use('/api', gameRoutes);

// Mount auth game routes
app.use('/api/user', reviewRoutes);

// Mount authentication routes
app.use('/api/auth', authRoutes);

//mount admin routes
app.use('/api/admin', adminRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

