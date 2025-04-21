import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSearch, FaCompass, FaHistory, FaThumbsUp, FaYoutube, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  
  // Check if the current path matches the link path
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Inline styles for consistent appearance with navbar
  const sidebarStyle = {
    width: '240px',
    minWidth: '240px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e5e5e5',
    height: 'calc(100vh - 70px)',
    position: 'sticky',
    top: '70px',
    padding: '20px 0',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarWidth: 'thin',
    scrollbarColor: '#c1c1c1 #f1f1f1'
  };

  // Custom scrollbar for webkit browsers (Chrome, Safari, Edge)
  const scrollbarStyles = `
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #a1a1a1;
    }
  `;

  const sectionStyle = {
    marginBottom: '24px',
    paddingLeft: '16px',
    paddingRight: '16px'
  };

  const sectionTitleStyle = {
    fontSize: '14px',
    color: '#606060',
    fontWeight: '500',
    marginBottom: '12px',
    paddingLeft: '12px'
  };

  const menuItemStyle = (isItemActive) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '10px 12px',
    borderRadius: '10px',
    marginBottom: '8px',
    textDecoration: 'none',
    color: isItemActive ? '#030303' : '#606060',
    backgroundColor: isItemActive ? '#f1f1f1' : 'transparent',
    fontWeight: isItemActive ? '500' : 'normal',
    transition: 'background-color 0.2s'
  });

  const iconStyle = {
    marginRight: '16px',
    fontSize: '18px'
  };

  const channelItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    borderRadius: '10px',
    marginBottom: '8px',
    textDecoration: 'none',
    color: '#606060',
    transition: 'background-color 0.2s'
  };

  const channelImageStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    marginRight: '16px',
    backgroundColor: '#f1f1f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const dividerStyle = {
    height: '1px',
    backgroundColor: '#e5e5e5',
    margin: '16px 0'
  };

  // Fake channel data - Adding more channels to test scrolling
  const channels = [
    { id: 1, name: 'Tech Simplified', image: '💻' },
    { id: 2, name: 'Gaming Zone', image: '🎮' },
    { id: 3, name: 'Music Universe', image: '🎵' },
    { id: 4, name: 'Cooking Masters', image: '🍳' },
    { id: 5, name: 'Travel Explorers', image: '✈️' },
    { id: 6, name: 'Fitness First', image: '💪' },
    { id: 7, name: 'Science Lab', image: '🔬' },
    { id: 8, name: 'Art Studio', image: '🎨' }
  ];

  // Categories - Adding more to test scrolling
  const categories = [
    'Music', 'Gaming', 'Technology', 'Sports', 'Education', 
    'Fashion', 'Travel', 'Cooking', 'Science', 'Art', 
    'Comedy', 'Movies', 'DIY', 'Fitness', 'Pets'
  ];

  return (
    <>
      <style>{scrollbarStyles}</style>
      <aside style={sidebarStyle}>
        {/* Main Navigation */}
        <div style={sectionStyle}>
          <Link to="/" style={menuItemStyle(isActive('/'))}>
            <FaHome style={iconStyle} />
            <span>Home</span>
          </Link>
          <Link to="/search" style={menuItemStyle(isActive('/search'))}>
            <FaSearch style={iconStyle} />
            <span>Search</span>
          </Link>
          <Link to="/explore" style={menuItemStyle(isActive('/explore'))}>
            <FaCompass style={iconStyle} />
            <span>Explore</span>
          </Link>
        </div>
        
        <div style={dividerStyle}></div>
        
        {/* Personal Section */}
        <div style={sectionStyle}>
          <Link to="/history" style={menuItemStyle(isActive('/history'))}>
            <FaHistory style={iconStyle} />
            <span>History</span>
          </Link>
          <Link to="/liked" style={menuItemStyle(isActive('/liked'))}>
            <FaThumbsUp style={iconStyle} />
            <span>Liked Videos</span>
          </Link>
        </div>
        
        <div style={dividerStyle}></div>
        
        {/* Subscriptions */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>SUBSCRIPTIONS</h3>
          {channels.map(channel => (
            <Link key={channel.id} to={`/channel/${channel.id}`} style={channelItemStyle}>
              <div style={channelImageStyle}>
                <span>{channel.image}</span>
              </div>
              <span>{channel.name}</span>
            </Link>
          ))}
        </div>
        
        <div style={dividerStyle}></div>
        
        {/* Categories */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>CATEGORIES</h3>
          {categories.map((category, index) => (
            <Link key={index} to={`/category/${category.toLowerCase()}`} style={channelItemStyle}>
              <div style={channelImageStyle}>
                <FaYoutube />
              </div>
              <span>{category}</span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 