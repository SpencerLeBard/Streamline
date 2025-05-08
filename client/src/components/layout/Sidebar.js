import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSearch, FaCompass, FaHistory, FaThumbsUp, FaYoutube, FaUserCircle, FaBars } from 'react-icons/fa';
import { 
  FaMusic, FaGamepad, FaLaptopCode, FaRunning, FaGraduationCap, 
  FaTshirt, FaPlane, FaUtensils, FaFlask, FaPalette,
  FaLaughSquint, FaFilm, FaTools, FaDumbbell, FaDog
} from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
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
  
  // Check if the current path matches the link path
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Inline styles for consistent appearance with navbar
  const sidebarStyle = {
    width: isCollapsed ? '70px' : (isMobileView ? '0' : '240px'),
    minWidth: isCollapsed ? '70px' : (isMobileView ? '0' : '240px'),
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e5e5e5',
    height: 'calc(100vh - 70px)',
    position: 'sticky',
    top: '70px',
    padding: isCollapsed ? '20px 0' : '20px 0',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarWidth: 'thin',
    scrollbarColor: '#c1c1c1 #f1f1f1',
    transition: 'all 0.3s ease',
    zIndex: 90
  };

  // Mobile overlay sidebar style
  const mobileSidebarStyle = {
    position: 'fixed',
    top: '60px',
    left: 0,
    width: isCollapsed ? '0' : '240px',
    height: 'calc(100vh - 60px)',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e5e5e5',
    padding: '20px 0',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarWidth: 'thin',
    scrollbarColor: '#c1c1c1 #f1f1f1',
    transition: 'all 0.3s ease',
    zIndex: 100,
    boxShadow: isCollapsed ? 'none' : '0 4px 6px rgba(0,0,0,0.1)'
  };

  // Overlay backdrop for mobile
  const backdropStyle = {
    display: isMobileView && !isCollapsed ? 'block' : 'none',
    position: 'fixed',
    top: '60px',
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 95
  };
  
  // Toggle button style
  const toggleButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    left: isCollapsed ? '20px' : '250px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    border: 'none',
    zIndex: 101,
    transition: 'all 0.3s ease',
    display: isMobileView ? 'none' : 'flex'
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
    @media (max-width: 768px) {
      .desktop-sidebar {
        display: none;
      }
    }
  `;

  const sectionStyle = {
    marginBottom: '24px',
    paddingLeft: isCollapsed ? '0' : '16px',
    paddingRight: isCollapsed ? '0' : '16px'
  };

  const sectionTitleStyle = {
    fontSize: '14px',
    color: '#606060',
    fontWeight: '500',
    marginBottom: '12px',
    paddingLeft: '12px',
    display: isCollapsed ? 'none' : 'block'
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
    transition: 'background-color 0.2s',
    justifyContent: isCollapsed ? 'center' : 'flex-start'
  });

  const iconStyle = {
    marginRight: isCollapsed ? '0' : '16px',
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
    transition: 'background-color 0.2s',
    justifyContent: isCollapsed ? 'center' : 'flex-start'
  };

  const channelImageStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    marginRight: isCollapsed ? '0' : '16px',
    backgroundColor: '#f1f1f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textStyle = {
    display: isCollapsed ? 'none' : 'block'
  };

  const dividerStyle = {
    height: '1px',
    backgroundColor: '#e5e5e5',
    margin: '16px 0'
  };

  // Categories - Adding more to test scrolling
  const categories = [
    { name: 'Music', icon: <FaMusic /> },
    { name: 'Gaming', icon: <FaGamepad /> }, 
    { name: 'Technology', icon: <FaLaptopCode /> }, 
    { name: 'Sports', icon: <FaRunning /> }, 
    { name: 'Education', icon: <FaGraduationCap /> },
    { name: 'Fashion', icon: <FaTshirt /> }, 
    { name: 'Travel', icon: <FaPlane /> }, 
    { name: 'Cooking', icon: <FaUtensils /> }, 
    { name: 'Science', icon: <FaFlask /> }, 
    { name: 'Art', icon: <FaPalette /> },
    { name: 'Comedy', icon: <FaLaughSquint /> }, 
    { name: 'Movies', icon: <FaFilm /> }, 
    { name: 'DIY', icon: <FaTools /> }, 
    { name: 'Fitness', icon: <FaDumbbell /> }, 
    { name: 'Pets', icon: <FaDog /> }
  ];

  const renderSidebarContent = () => (
    <>
      {/* Main Navigation */}
      <div style={sectionStyle}>
        <Link to="/home" style={menuItemStyle(isActive('/') || isActive('/home'))}>
          <FaHome style={iconStyle} />
          <span style={textStyle}>Home</span>
        </Link>
        <Link to="/search" style={menuItemStyle(isActive('/search'))}>
          <FaSearch style={iconStyle} />
          <span style={textStyle}>Search</span>
        </Link>
        <Link to="/explore" style={menuItemStyle(isActive('/explore'))}>
          <FaCompass style={iconStyle} />
          <span style={textStyle}>Explore</span>
        </Link>
      </div>
      
      <div style={dividerStyle}></div>
      
      {/* Personal Section */}
      <div style={sectionStyle}>
        <Link to="/history" style={menuItemStyle(isActive('/history'))}>
          <FaHistory style={iconStyle} />
          <span style={textStyle}>History</span>
        </Link>
        <Link to="/liked" style={menuItemStyle(isActive('/liked'))}>
          <FaThumbsUp style={iconStyle} />
          <span style={textStyle}>Liked Videos</span>
        </Link>
      </div>
      
      {!isCollapsed && (
        <>
          <div style={dividerStyle}></div>
          
          {/* Categories */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>CATEGORIES</h3>
            {categories.map((category, index) => (
              <Link key={index} to={`/category/${category.name.toLowerCase()}`} style={channelItemStyle}>
                <div style={channelImageStyle}>
                  {category.icon}
                </div>
                <span style={textStyle}>{category.name}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <>
      <style>{scrollbarStyles}</style>
      
      {/* Desktop sidebar */}
      <aside style={sidebarStyle} className="desktop-sidebar">
        {renderSidebarContent()}
      </aside>
      
      {/* Mobile sidebar overlay */}
      {isMobileView && (
        <>
          <div style={backdropStyle} onClick={toggleSidebar}></div>
          <aside style={mobileSidebarStyle}>
            {!isCollapsed && renderSidebarContent()}
          </aside>
        </>
      )}
      
      {/* Toggle button */}
      <button style={toggleButtonStyle} onClick={toggleSidebar} aria-label="Toggle sidebar">
        <FaBars />
      </button>
    </>
  );
};

export default Sidebar; 