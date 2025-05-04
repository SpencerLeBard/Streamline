import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaThumbsUp, FaClock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

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

  // Inline styles for consistent appearance with navbar and sidebar
  const pageStyle = {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    width: '100%',
    overflowX: 'hidden'
  };

  const mainContentStyle = {
    padding: isMobileView ? '16px' : '20px 40px',
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%'
  };

  const categoryBarStyle = {
    display: 'flex',
    overflow: 'auto',
    padding: '16px 0',
    scrollbarWidth: 'none', // Hide scrollbar in Firefox
    msOverflowStyle: 'none', // Hide scrollbar in IE/Edge
  };

  // Custom scrollbar hiding for webkit browsers
  const scrollbarHideStyle = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    @media (max-width: 768px) {
      .video-grid {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)) !important;
      }
      
      .video-card:hover {
        transform: none !important;
      }
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      .video-grid {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)) !important;
      }
    }
  `;

  const categoryButtonStyle = (isSelected) => ({
    padding: '8px 16px',
    margin: '0 8px 0 0',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    backgroundColor: isSelected ? '#ff0000' : '#f1f1f1',
    color: isSelected ? '#ffffff' : '#606060',
    fontWeight: isSelected ? '500' : 'normal',
    transition: 'background-color 0.2s, color 0.2s'
  });

  const videoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: isMobileView ? '16px' : '24px',
    marginTop: '20px'
  };

  const videoCardStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    ':hover': {
      transform: isMobileView ? 'none' : 'translateY(-5px)',
      boxShadow: isMobileView ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '0 8px 20px rgba(0, 0, 0, 0.15)'
    }
  };

  const thumbnailStyle = {
    width: '100%',
    height: isMobileView ? '200px' : '180px',
    objectFit: 'cover',
    display: 'block'
  };

  const videoInfoStyle = {
    padding: isMobileView ? '12px' : '16px'
  };

  const videoTitleStyle = {
    fontSize: isMobileView ? '15px' : '16px',
    fontWeight: '500',
    color: '#0f0f0f',
    marginBottom: '8px',
    lineHeight: '1.4',
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
    display: 'block',
    marginBottom: '6px'
  };

  const linkStyle = {
    textDecoration: 'none'
  };

  const videoStatsStyle = {
    display: 'flex',
    fontSize: '13px',
    color: '#606060',
    alignItems: 'center',
    gap: isMobileView ? '10px' : '16px',
    flexWrap: 'wrap'
  };

  const statItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 70px)',
    fontSize: '18px',
    color: '#606060'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '40px 0',
    color: '#606060',
    fontSize: '16px'
  };

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
          timestamp: '2 days ago',
          channelName: 'JS Masters',
          channelId: '5',
          category: 'Technology',
        },
        {
          id: '6',
          title: 'React vs Vue vs Angular - Which One to Choose?',
          description: 'A detailed comparison of popular frontend frameworks',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 18000,
          likes: 450,
          timestamp: '4 days ago',
          channelName: 'Framework Compare',
          channelId: '6',
          category: 'Technology',
        },
        {
          id: '7',
          title: 'Responsive Web Design Principles for Beginners',
          description: 'Learn how to create responsive websites',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 5000,
          likes: 120,
          timestamp: '3 weeks ago',
          channelName: 'Web Design Pro',
          channelId: '7',
          category: 'Education',
        },
        {
          id: '8',
          title: 'TypeScript Crash Course for JavaScript Developers',
          description: 'Quick introduction to TypeScript for JS developers',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 7200,
          likes: 210,
          timestamp: '5 days ago',
          channelName: 'Type Masters',
          channelId: '8',
          category: 'Education',
        },
      ];

      setVideos(mockVideos);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  /* ────────────────────────────── handlers ────────────────────────────── */
  const handleCategoryChange = (category) => setSelectedCategory(category);

  /* ─────────────────────────────── render ─────────────────────────────── */
  if (loading) {
    return (
      <div style={loadingStyle}>
        <div>Loading videos...</div>
      </div>
    );
  }

  return (
    <>
      <style>{scrollbarHideStyle}</style>
      <div style={pageStyle}>
        {/* Main content */}
        <div style={mainContentStyle}>
          {/* Category selection */}
          <div style={categoryBarStyle} className="hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                style={categoryButtonStyle(selectedCategory === category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video grid */}
          {videos.length === 0 ? (
            <div style={emptyStateStyle}>
              No videos found. Try another category.
            </div>
          ) : (
            <div style={videoGridStyle}>
              {videos.map((video) => (
                <div key={video.id} style={videoCardStyle}>
                  <Link to={`/video/${video.id}`} style={linkStyle}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      style={thumbnailStyle}
                    />
                    <div style={videoInfoStyle}>
                      <h3 style={videoTitleStyle}>{video.title}</h3>
                      <Link to={`/channel/${video.channelId}`} style={channelNameStyle}>
                        {video.channelName}
                      </Link>
                      <div style={videoStatsStyle}>
                        <div style={statItemStyle}>
                          <FaEye />
                          <span>{video.views.toLocaleString()} views</span>
                        </div>
                        <div style={statItemStyle}>
                          <FaThumbsUp />
                          <span>{video.likes} likes</span>
                        </div>
                        <div style={statItemStyle}>
                          <FaClock />
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
    </>
  );
};

export default Home;
