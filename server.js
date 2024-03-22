// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const gameRoutes = require('./routes/gameRoute');
// const authRoutes = require('./routes/authRoute');
// const adminRoutes = require('./routes/adminRoute');
// const reviewRoutes = require('./routes/reviewRoutes');

// const app = express();
// const PORT = process.env.PORT || 3000;

// const authMiddleware = require('./middlewares/authMiddleware');

// // Apply CORS middleware
// app.use(authMiddleware.enableCors);

// // app.use(bodyParser.json());
// app.use(express.json());

// // Mount game routes
// app.use('/api', gameRoutes);

// // Mount auth game routes
// app.use('/api/user', reviewRoutes);

// // Mount authentication routes
// app.use('/api/auth', authRoutes);

// //mount admin routes
// app.use('/api/admin', adminRoutes);


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Import the cors middleware
const gameRoutes = require('./routes/gameRoute');
const authRoutes = require('./routes/authRoute');
const adminRoutes = require('./routes/adminRoute');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const authMiddleware = require('./middlewares/authMiddleware');

// Enable CORS middleware
app.use(cors());

// app.use(bodyParser.json());
app.use(express.json());

// Mount game routes
app.use('/api', gameRoutes);

// Mount auth game routes
app.use('/api/user', reviewRoutes);

// Mount authentication routes
app.use('/api/auth', authRoutes);

// Mount admin routes
app.use('/api/admin', adminRoutes);

app.use('/images', express.static('images'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});