# VidStream - Video Streaming Platform

A modern YouTube-like video streaming platform built with the MERN stack (MongoDB, Express, React, Node.js).

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

## Setup and Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- AWS account (for S3 storage)

### Backend Setup
1. Navigate to the backend directory
```
cd video-stream-project/backend
```

2. Install dependencies
```
npm install
```

3. Create a `.env` file with the following variables
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
S3_BUCKET_NAME=your_s3_bucket_name
```

4. Start the server
```
npm run dev
```

### Frontend Setup
1. Navigate to the frontend directory
```
cd video-stream-project/frontend
```

2. Install dependencies
```
npm install
```

3. Create a `.env` file with the following variables
```
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development server
```
npm start
```

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
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 