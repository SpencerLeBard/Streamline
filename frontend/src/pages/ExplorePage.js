import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaFire, FaRandom, FaStar } from 'react-icons/fa';

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
      const mockVideos = generateMockVideos(selectedCategory, 12);
      setVideos(mockVideos);
      setLoading(false);
    }, 800);
  }, [selectedCategory]);

  const generateMockVideos = (category, count) => {
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

  // Styles
  const pageStyle = {
    backgroundColor: '#f9f9f9',
    minHeight: 'calc(100vh - 70px)', // Adjust for navbar height
    width: '100%',
    overflowX: 'hidden'
  };

  const mainContentStyle = {
    padding: '20px 40px',
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%'
  };

  const headerStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#0f0f0f',
    textAlign: 'center'
  };

  const categoriesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '40px'
  };

  const categoryItemStyle = (category) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '24px',
    fontSize: '16px',
    fontWeight: selectedCategory === category.name ? 'bold' : 'normal',
    backgroundColor: selectedCategory === category.name ? category.color : '#fff',
    color: selectedCategory === category.name ? '#fff' : '#333',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: `2px solid ${category.color}`
  });

  const videoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px'
  };

  const videoCardStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    transform: 'translateY(0)',
    ':hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)'
    }
  };

  const thumbnailContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px 16px 0 0'
  };

  const thumbnailStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    ':hover': {
      transform: 'scale(1.05)'
    }
  };

  const categoryTagStyle = (category) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '4px 12px',
    borderRadius: '20px',
    backgroundColor: getCategoryColor(category),
    color: '#fff',
    fontSize: '12px',
    fontWeight: 'bold'
  });

  const videoInfoStyle = {
    padding: '16px'
  };

  const videoTitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0f0f0f',
    marginBottom: '8px',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textDecoration: 'none'
  };

  const channelNameStyle = {
    fontSize: '14px',
    color: '#606060',
    textDecoration: 'none',
    marginBottom: '6px'
  };

  const viewsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '13px',
    color: '#606060'
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    fontSize: '18px',
    color: '#606060'
  };

  // Helper function to get the color for a category
  const getCategoryColor = (categoryName) => {
    const category = categories.find(c => c.name === categoryName);
    return category ? category.color : '#333';
  };

  return (
    <div style={pageStyle}>
      <div style={mainContentStyle}>
        <h1 style={headerStyle}>Explore</h1>

        {/* Categories */}
        <div style={categoriesContainerStyle}>
          {categories.map((category) => (
            <div
              key={category.name}
              style={categoryItemStyle(category)}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Videos */}
        {loading ? (
          <div style={loadingStyle}>
            <div>Loading {selectedCategory} videos...</div>
          </div>
        ) : (
          <div style={videoGridStyle}>
            {videos.map((video) => (
              <Link key={video.id} to={`/video/${video.id}`} style={{ textDecoration: 'none' }}>
                <div style={videoCardStyle}>
                  <div style={thumbnailContainerStyle}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      style={thumbnailStyle}
                    />
                    <div style={categoryTagStyle(selectedCategory)}>
                      {selectedCategory}
                    </div>
                  </div>
                  <div style={videoInfoStyle}>
                    <h3 style={videoTitleStyle}>{video.title}</h3>
                    <Link to={`/channel/${video.channelId}`} style={channelNameStyle}>
                      {video.channelName}
                    </Link>
                    <div style={viewsStyle}>
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