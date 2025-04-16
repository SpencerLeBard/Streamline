const express = require('express');
const router = express.Router();

// const authRoutes = require('./auth.routes');
const videoRoutes = require('./video.routes');
// const userRoutes = require('./user.routes');
// const commentRoutes = require('./comment.routes');

// Route definitions
// router.use('/auth', authRoutes);
router.use('/videos', videoRoutes);
// router.use('/users', userRoutes);
// router.use('/comments', commentRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

module.exports = router; 