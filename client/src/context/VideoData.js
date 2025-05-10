// Mock video data for the application

// Home page and general videos
export const mockVideos = [
  {
    id: '1',
    title: 'Introduction to JavaScript - Learn the Core Concepts',
    description: 'Learn the basics of JavaScript programming',
    thumbnail: 'https://via.placeholder.com/320x180',
    views: 15000,
    likes: 350,
    timestamp: '2 weeks ago',
    channelName: 'Code Masters',
    channelId: '1',
    category: 'Education',
  },
  {
    id: '2',
    title: 'React Hooks Tutorial - useState, useEffect & Custom Hooks',
    description: 'Understanding React Hooks with examples',
    thumbnail: 'https://via.placeholder.com/320x180',
    views: 8500,
    likes: 220,
    timestamp: '3 days ago',
    channelName: 'React Experts',
    channelId: '2',
    category: 'Technology',
  },
  {
    id: '3',
    title: 'Building a REST API with Node.js and Express from Scratch',
    description: 'Complete guide to building APIs with Node.js',
    thumbnail: 'https://via.placeholder.com/320x180',
    views: 12000,
    likes: 300,
    timestamp: '1 week ago',
    channelName: 'Backend Dev',
    channelId: '3',
    category: 'Technology',
  },
  {
    id: '4',
    title: 'CSS Grid Layout Explained - Master Web Layouts',
    description: 'Master CSS Grid layout in 20 minutes',
    thumbnail: 'https://via.placeholder.com/320x180',
    views: 6000,
    likes: 150,
    timestamp: '1 month ago',
    channelName: 'CSS Wizards',
    channelId: '4',
    category: 'Education',
  },
  {
    id: '5',
    title: 'Modern JavaScript ES6 Features You Need to Know',
    description: 'Essential ES6 features for every developer',
    thumbnail: 'https://via.placeholder.com/320x180',
    views: 9500,
    likes: 280,
    timestamp: '2 weeks ago',
    channelName: 'JS Mastery',
    channelId: '5',
    category: 'Technology',
  },
  {
    id: '6',
    title: 'TypeScript Crash Course - Why You Should Use It',
    description: 'Learn TypeScript basics in 30 minutes',
    thumbnail: 'https://via.placeholder.com/320x180',
    views: 7200,
    likes: 190,
    timestamp: '4 days ago',
    channelName: 'TypeScript Guru',
    channelId: '6',
    category: 'Technology',
  },
  {
    id: '7',
    title: 'MongoDB vs PostgreSQL - Which Database to Choose?',
    description: 'Comparing popular database options for your next project',
    thumbnail: 'https://via.placeholder.com/320x180',
    views: 5600,
    likes: 130,
    timestamp: '1 week ago',
    channelName: 'Database Pro',
    channelId: '7',
    category: 'Technology',
  },
  {
    id: '8',
    title: 'Learn Docker in 1 Hour - Containerize Your Applications',
    description: 'Quick start guide to Docker containers',
    thumbnail: 'https://via.placeholder.com/320x180',
    views: 11000,
    likes: 320,
    timestamp: '3 weeks ago',
    channelName: 'DevOps Channel',
    channelId: '8',
    category: 'Technology',
  },
];

// Single video page data
export const getSingleVideoById = (videoId) => {
  const existingVideo = mockVideos.find(v => v.id === videoId);
  
  if (existingVideo) {
    return {
      ...existingVideo,
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      createdAt: '2023-09-15T14:48:00.000Z',
      channelAvatar: 'https://via.placeholder.com/40',
      subscribers: 52000
    };
  }
  
  // Default mock video if ID not found
  return {
    id: videoId,
    title: 'How to Build Modern Web Applications',
    description: 'In this comprehensive tutorial, we explore the fundamentals of building modern web applications using React, Node.js, and MongoDB. Learn about state management, routing, API integration, and more.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://via.placeholder.com/640x360',
    views: 125000,
    likes: 3200,
    createdAt: '2023-09-15T14:48:00.000Z',
    category: 'Technology',
    channelName: 'Web Dev Tutorials',
    channelId: '1',
    channelAvatar: 'https://via.placeholder.com/40',
    subscribers: 52000
  };
};

// Related videos for video page
export const getRelatedVideos = (videoId) => {
  // Exclude the current video and return a few others
  const otherVideos = mockVideos.filter(v => v.id !== videoId).slice(0, 3);
  
  return otherVideos.map(video => ({
    id: video.id,
    title: video.title,
    description: video.description,
    thumbnail: video.thumbnail,
    views: video.views,
    timestamp: video.timestamp,
    channelName: video.channelName,
    channelId: video.channelId
  }));
};

// Search results generator
export const getSearchResults = (query) => {
  // Return videos with titles containing the query, or mock ones with the query injected
  const directMatches = mockVideos.filter(v => 
    v.title.toLowerCase().includes(query.toLowerCase()) || 
    v.description.toLowerCase().includes(query.toLowerCase())
  );
  
  if (directMatches.length >= 4) {
    return directMatches.slice(0, 4);
  }
  
  // If not enough direct matches, create custom ones with the query in the title
  return [
    {
      id: '101',
      title: `Results for "${query}": JavaScript Tutorial`,
      description: 'Learn the basics of JavaScript programming',
      thumbnail: 'https://via.placeholder.com/320x180',
      views: 15000,
      likes: 350,
      timestamp: '2 weeks ago',
      channelName: 'Code Masters',
      channelId: '1',
      category: 'Education',
    },
    {
      id: '102',
      title: `${query} in React: useState and useEffect Hooks`,
      description: 'Understanding React Hooks with examples',
      thumbnail: 'https://via.placeholder.com/320x180',
      views: 8500,
      likes: 220,
      timestamp: '3 days ago',
      channelName: 'React Experts',
      channelId: '2',
      category: 'Technology',
    },
    {
      id: '103',
      title: `Building ${query} APIs with Node.js`,
      description: 'Complete guide to building APIs with Node.js',
      thumbnail: 'https://via.placeholder.com/320x180',
      views: 12000,
      likes: 300,
      timestamp: '1 week ago',
      channelName: 'Backend Dev',
      channelId: '3',
      category: 'Technology',
    },
    {
      id: '104',
      title: `${query} CSS Grid Layout Explained`,
      description: 'Master CSS Grid layout in 20 minutes',
      thumbnail: 'https://via.placeholder.com/320x180',
      views: 6000,
      likes: 150,
      timestamp: '1 month ago',
      channelName: 'CSS Wizards',
      channelId: '4',
      category: 'Education',
    },
  ];
};

// Channel page data
export const getChannelData = (channelId) => {
  // Find videos from this channel
  const channelVideos = mockVideos.filter(v => v.channelId === channelId);
  
  // Default channel info
  const channelInfo = {
    id: channelId,
    name: channelVideos.length > 0 ? channelVideos[0].channelName : 'Sample Channel',
    subscribers: 52000,
    description: 'This is a sample channel for video content creators.',
    avatar: 'https://via.placeholder.com/100',
    banner: 'https://via.placeholder.com/1200x300'
  };
  
  return {
    channel: channelInfo,
    videos: channelVideos.length > 0 ? channelVideos : [
      {
        id: '1',
        title: 'Getting Started with React',
        description: 'Learn the basics of React in this beginner-friendly tutorial',
        thumbnail: 'https://via.placeholder.com/320x180',
        views: 12000,
        timestamp: '1 week ago'
      },
      {
        id: '2',
        title: 'Advanced CSS Techniques',
        description: 'Master CSS with these advanced techniques',
        thumbnail: 'https://via.placeholder.com/320x180',
        views: 8000,
        timestamp: '2 weeks ago'
      },
      {
        id: '3',
        title: 'Node.js Crash Course',
        description: 'Get up to speed with Node.js quickly',
        thumbnail: 'https://via.placeholder.com/320x180',
        views: 6500,
        timestamp: '1 month ago'
      }
    ]
  };
};

// Helper to generate mock videos for the Explore page
export const generateExploreVideos = (category, count) => {
  const videos = [];
  
  for (let i = 1; i <= count; i++) {
    videos.push({
      id: `${category.toLowerCase()}-${i}`,
      title: `${category} Video ${i}: Amazing Content for Everyone`,
      views: Math.floor(Math.random() * 900000) + 100000,
      timestamp: `${Math.floor(Math.random() * 4) + 1} ${['days', 'weeks', 'months'][Math.floor(Math.random() * 3)]} ago`,
      thumbnail: `https://via.placeholder.com/320x180/ffaa${i}0/ffffff?text=${category}+${i}`,
      channelName: `${category} Channel ${i}`,
      channelId: i
    });
  }
  
  return videos;
}; 