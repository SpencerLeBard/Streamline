import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaThumbsUp, FaClock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { mockVideos } from '../context/VideoData';
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

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
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
