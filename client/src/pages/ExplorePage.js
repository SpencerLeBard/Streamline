import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaFire, FaRandom, FaStar } from 'react-icons/fa';
import { generateExploreVideos } from '../context/VideoData';
import './ExplorePage.css';

const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Trending');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define categories with fun icons and colors
  const categories = [
    { name: 'Trending', icon: <FaFire />, color: '#FF4500' },
    { name: 'New', icon: <FaStar />, color: '#4CAF50' },
    { name: 'Music', icon: '🎵', color: '#2196F3' },
    { name: 'Gaming', icon: '🎮', color: '#9C27B0' },
    { name: 'Sports', icon: '⚽', color: '#FF9800' },
    { name: 'Learning', icon: '🧠', color: '#795548' },
    { name: 'Fashion', icon: '👗', color: '#E91E63' },
    { name: 'Science', icon: '🔬', color: '#607D8B' },
    { name: 'Random', icon: <FaRandom />, color: '#673AB7' }
  ];

  useEffect(() => {
    setLoading(true);

    // Simulate API call to get videos for the selected category
    setTimeout(() => {
      const mockVideos = generateExploreVideos(selectedCategory, 12);
      setVideos(mockVideos);
      setLoading(false);
    }, 800);
  }, [selectedCategory]);

  // Helper function to get the color for a category
  const getCategoryColor = (categoryName) => {
    const category = categories.find(c => c.name === categoryName);
    return category ? category.color : '#333';
  };

  return (
    <div className="explore-page">
      <div className="main-content">
        <h1 className="header">Explore</h1>

        {/* Categories */}
        <div className="categories-container">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
              style={{
                borderColor: category.color,
                backgroundColor: selectedCategory === category.name ? category.color : '#fff'
              }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Videos */}
        {loading ? (
          <div className="loading">
            <div>Loading {selectedCategory} videos...</div>
          </div>
        ) : (
          <div className="video-grid">
            {videos.map((video) => (
              <Link key={video.id} to={`/video/${video.id}`} style={{ textDecoration: 'none' }}>
                <div className="video-card">
                  <div className="thumbnail-container">
                    <img
                      src={video.thumbnail}
                      alt=""
                      className="thumbnail"
                    />
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <Link to={`/channel/${video.channelId}`} className="channel-name">
                      {video.channelName}
                    </Link>
                    <div className="views">
                      <FaEye size={12} />
                      <span>{video.views.toLocaleString()} views • {video.timestamp}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage; 