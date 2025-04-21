require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

// Removing API Routes
// app.use('/api', routes);

// =============== AUTH ROUTES ===============

// Login route
app.post('/auth/login', (req, res) => {
  console.log('Attempting login with:', req.body);
  const { email, password } = req.body;
  
  // Check against hardcoded credentials
  if (email === 'slebard@gmail.com' && password === 'spencer47') {
    console.log('Login successful for user:', email);
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: '1',
        email: email,
        name: 'Spencer Lebard'
      },
      token: 'sample-jwt-token'
    });
  } else {
    console.log('Login failed. Invalid credentials:', email);
    res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    });
  }
});

// Register route
app.post('/auth/register', (req, res) => {
  console.log('Attempting registration with:', req.body);
  const { email, password, name } = req.body;
  
  if (email && password && name) {
    console.log('Registration successful for user:', email);
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      user: {
        id: '1',
        email: email,
        name: name
      }
    });
  } else {
    console.log('Registration failed. Missing required fields.');
    res.status(400).json({
      success: false,
      message: 'Email, password, and name are required'
    });
  }
});

// Logout route
app.post('/auth/logout', (req, res) => {
  console.log('User logged out');
  res.status(200).json({
    success: true,
    message: 'Logout successful'
  });
});

// =============== USER ROUTES ===============

// Get user profile
app.get('/users/profile/:id', (req, res) => {
  const userId = req.params.id;
  console.log('Getting profile for user ID:', userId);
  
  res.status(200).json({
    success: true,
    user: {
      id: userId,
      name: 'Spencer Lebard',
      email: 'slebard@gmail.com',
      bio: 'This is a user profile',
      createdAt: new Date().toISOString()
    }
  });
});

// Update user profile
app.put('/users/profile/:id', (req, res) => {
  const userId = req.params.id;
  const { name, bio } = req.body;
  console.log('Updating profile for user ID:', userId, 'with data:', req.body);
  
  res.status(200).json({
    success: true,
    message: 'Profile updated successfully',
    user: {
      id: userId,
      name: name || 'Spencer Lebard',
      bio: bio || 'This is a user profile',
      updatedAt: new Date().toISOString()
    }
  });
});

// Get all users
app.get('/users', (req, res) => {
  console.log('Getting all users');
  res.status(200).json({
    success: true,
    users: [
      {
        id: '1',
        name: 'Spencer Lebard',
        email: 'slebard@gmail.com'
      },
      {
        id: '2',
        name: 'Test User 2',
        email: 'user2@example.com'
      }
    ]
  });
});

// =============== VIDEO ROUTES ===============

// Get all videos
app.get('/videos', (req, res) => {
  console.log('Getting all videos');
  res.status(200).json({
    success: true,
    videos: [
      {
        id: '1',
        title: 'Sample Video 1',
        description: 'This is a sample video',
        url: 'https://example.com/video1.mp4',
        thumbnail: 'https://example.com/thumbnail1.jpg',
        views: 1000,
        likes: 150
      },
      {
        id: '2',
        title: 'Sample Video 2',
        description: 'Another sample video',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://example.com/thumbnail2.jpg',
        views: 2000,
        likes: 300
      }
    ]
  });
});

// Get video by ID
app.get('/videos/:id', (req, res) => {
  const videoId = req.params.id;
  console.log('Getting video with ID:', videoId);
  
  res.status(200).json({
    success: true,
    video: {
      id: videoId,
      title: 'Sample Video',
      description: 'This is a sample video',
      url: 'https://example.com/video.mp4',
      thumbnail: 'https://example.com/thumbnail.jpg',
      views: 1000,
      likes: 150
    }
  });
});

// Create new video
app.post('/videos', (req, res) => {
  const { title, description } = req.body;
  console.log('Creating new video with data:', req.body);
  
  if (!title || !description) {
    console.log('Video creation failed. Missing title or description.');
    return res.status(400).json({
      success: false,
      message: 'Title and description are required'
    });
  }
  
  res.status(201).json({
    success: true,
    video: {
      id: Math.floor(Math.random() * 1000).toString(),
      title,
      description,
      url: 'https://example.com/video.mp4',
      thumbnail: 'https://example.com/thumbnail.jpg',
      views: 0,
      likes: 0
    }
  });
});

// Update video
app.put('/videos/:id', (req, res) => {
  const videoId = req.params.id;
  const { title, description } = req.body;
  console.log('Updating video with ID:', videoId, 'with data:', req.body);
  
  res.status(200).json({
    success: true,
    video: {
      id: videoId,
      title: title || 'Sample Video',
      description: description || 'This is a sample video',
      url: 'https://example.com/video.mp4',
      thumbnail: 'https://example.com/thumbnail.jpg',
      views: 1000,
      likes: 150
    }
  });
});

// Delete video
app.delete('/videos/:id', (req, res) => {
  const videoId = req.params.id;
  console.log('Deleting video with ID:', videoId);
  
  res.status(200).json({
    success: true,
    message: `Video ${videoId} deleted successfully`
  });
});

// Get trending videos
app.get('/videos/trending', (req, res) => {
  console.log('Getting trending videos');
  res.status(200).json({
    success: true,
    videos: [
      {
        id: '1',
        title: 'Trending Video 1',
        description: 'This is a trending video',
        url: 'https://example.com/trending1.mp4',
        thumbnail: 'https://example.com/trending1.jpg',
        views: 5000,
        likes: 800
      },
      {
        id: '2',
        title: 'Trending Video 2',
        description: 'Another trending video',
        url: 'https://example.com/trending2.mp4',
        thumbnail: 'https://example.com/trending2.jpg',
        views: 4500,
        likes: 750
      }
    ]
  });
});

// Get recommended videos
app.get('/videos/recommended', (req, res) => {
  console.log('Getting recommended videos');
  res.status(200).json({
    success: true,
    videos: [
      {
        id: '1',
        title: 'Recommended Video 1',
        description: 'This is a recommended video',
        url: 'https://example.com/recommended1.mp4',
        thumbnail: 'https://example.com/recommended1.jpg',
        views: 3000,
        likes: 500
      },
      {
        id: '2',
        title: 'Recommended Video 2',
        description: 'Another recommended video',
        url: 'https://example.com/recommended2.mp4',
        thumbnail: 'https://example.com/recommended2.jpg',
        views: 2500,
        likes: 400
      }
    ]
  });
});

// =============== HEALTH CHECK ===============

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check request received');
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

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
  console.log(`==========================================================`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`==========================================================`);
  console.log(`API Endpoints available at: http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Login: POST http://localhost:${PORT}/auth/login`);
  console.log(`Register: POST http://localhost:${PORT}/auth/register`);
  console.log(`Videos: GET http://localhost:${PORT}/videos`);
  console.log(`==========================================================`);
}); 