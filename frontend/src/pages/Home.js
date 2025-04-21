import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaThumbsUp, FaClock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { login } = useAuth();

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
    padding: '20px 40px',
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
    gap: '24px',
    marginTop: '20px'
  };

  const videoCardStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const thumbnailStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    display: 'block'
  };

  const videoInfoStyle = {
    padding: '16px'
  };

  const videoTitleStyle = {
    fontSize: '16px',
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
    gap: '16px'
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
          title: 'The Future of AI in Web Development',
          description: 'Exploring how AI is changing the web development landscape',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 9300,
          likes: 410,
          timestamp: '5 days ago',
          channelName: 'Tech Insights',
          channelId: '5',
          category: 'Technology',
        },
        {
          id: '6',
          title: 'Advanced Data Structures Explained Simply',
          description: 'Understanding complex data structures with clear examples',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 7200,
          likes: 280,
          timestamp: '3 weeks ago',
          channelName: 'Code Masters',
          channelId: '1',
          category: 'Education',
        },
        {
          id: '7',
          title: 'The Complete Guide to MongoDB',
          description: 'Learn MongoDB from beginner to advanced',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 5100,
          likes: 190,
          timestamp: '2 months ago',
          channelName: 'Database Pros',
          channelId: '6',
          category: 'Technology',
        },
        {
          id: '8',
          title: 'TypeScript for React Developers',
          description: 'Improve your React code with TypeScript',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 11500,
          likes: 340,
          timestamp: '4 days ago',
          channelName: 'React Experts',
          channelId: '2',
          category: 'Technology',
        }
      ];

      const filteredVideos =
        selectedCategory === 'All'
          ? mockVideos
          : mockVideos.filter((v) => v.category === selectedCategory);

      setVideos(filteredVideos);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

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

                  <div style={videoInfoStyle}>
                    <Link to={`/video/${video.id}`} style={linkStyle}>
                      <h3 style={videoTitleStyle}>{video.title}</h3>
                    </Link>

                    <Link to={`/channel/${video.channelId}`} style={channelNameStyle}>
                      {video.channelName}
                    </Link>

                    <div style={videoStatsStyle}>
                      <div style={statItemStyle}>
                        <FaEye size={12} />
                        <span>{video.views.toLocaleString()}</span>
                      </div>
                      <div style={statItemStyle}>
                        <FaThumbsUp size={12} />
                        <span>{video.likes}</span>
                      </div>
                      <div style={statItemStyle}>
                        <FaClock size={12} />
                        <span>{video.timestamp}</span>
                      </div>
                    </div>
                  </div>
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
