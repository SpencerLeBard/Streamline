![image](https://github.com/user-attachments/assets/b7420859-45e8-43d4-b712-7c3ffd935c29)



# Streamline - Video Streaming Platform

A modern video streaming platform built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Video Streaming**: Stream videos with a modern video player
- **User Authentication**: Register, login, and manage your profile
- **Video Management**: Upload, edit, and delete your videos
- **Engagement**: Like, dislike, comment, and share videos
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Channel Pages**: User profiles with uploaded videos and statistics
- **Search & Discovery**: Find videos by title, description, or tags
- **Categories**: Browse videos by categories
- **Recommended Videos**: Get video recommendations based on viewing history

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- React Player for video playback
- Context API for state management

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- AWS S3 for video and image storage
- Express Validator for request validation


## Folder Structure

```
video-stream-project/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── index.js         # Entry point
│   ├── package.json
│   └── .env                 # Environment variables (create this file)
│
├── frontend/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context
│   │   ├── services/        # API services
│   │   ├── utils/           # Utility functions
│   │   ├── App.js           # Main component
│   │   └── index.js         # Entry point
│   ├── package.json
│   └── .env                 # Environment variables (create this file)
│
└── README.md


## License

This project is licensed under the MIT License. # Streamline
