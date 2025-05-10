import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaThumbsUp, FaClock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileView, setIsMobileView] = useState(false);
  const { login } = useAuth();

  // Check viewport size on mount and resize
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobileView();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobileView);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const categories = [
    'All',
    'Music',
    'Gaming',
    'Sports',
    'News',
    'Education',
    'Entertainment',
    'Technology',
  ];

  /* ─────────────────────────── load mock data ─────────────────────────── */
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const mockVideos = [
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

      // Filter videos if a category is selected
      const filteredVideos = selectedCategory === 'All'
        ? mockVideos
        : mockVideos.filter(video => video.category === selectedCategory);
      
      setVideos(filteredVideos);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => setSelectedCategory(category);

  if (loading) {
    return <div className="loading">Loading videos...</div>;
  }

  return (
    <div className="home-page">
      <div className="main-content">
        {/* Category filters */}
        <div className="category-bar hide-scrollbar">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video grid */}
        {videos.length === 0 ? (
          <div className="empty-state">
            No videos found in this category.
          </div>
        ) : (
          <div className="video-grid">
            {videos.map(video => (
              <div key={video.id} className="video-card">
                <Link to={`/video/${video.id}`} className="link-style">
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="thumbnail"
                  />
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <Link to={`/channel/${video.channelId}`} className="channel-name">
                      {video.channelName}
                    </Link>
                    <div className="video-stats">
                      <div className="stat-item">
                        <FaEye size={12} />
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                      <div className="stat-item">
                        <FaThumbsUp size={12} />
                        <span>{video.likes}</span>
                      </div>
                      <div className="stat-item">
                        <FaClock size={12} />
                        <span>{video.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
