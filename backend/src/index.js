require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', routes);

// Database connection
// MongoDB connection commented out
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/video-stream', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 