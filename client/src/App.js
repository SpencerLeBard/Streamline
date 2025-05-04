import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

// Page components
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChannelPage from './pages/ChannelPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SearchPage from './pages/SearchPage';
import ExplorePage from './pages/ExplorePage';

// Responsive utilities
import { useResponsive, createResponsiveCSS } from './utils/responsive';

function App() {
  const { isLoggedIn } = useAuth();
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [showSidebar, setShowSidebar] = useState(true);

  // Toggle sidebar visibility based on screen size
  useEffect(() => {
    setShowSidebar(!isMobile);
  }, [isMobile]);

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden'
  };

  const mainContentStyle = {
    display: 'flex',
    flex: 1,
    width: '100%',
    overflow: 'hidden'
  };

  const contentStyle = {
    flex: 1,
    padding: isMobile ? '16px' : isTablet ? '20px' : '24px',
    overflowY: 'auto',
    overflowX: 'hidden'
  };

  // Global responsive styles
  const globalResponsiveStyles = `
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      overflow-x: hidden;
    }
    
    @media (max-width: 767px) {
      .content-with-sidebar {
        margin-left: 0 !important;
      }
    }
    
    ${createResponsiveCSS()}
  `;

  // Determine the default starting page based on device type
  const DefaultPage = () => {
    return isMobile ? <Navigate to="/explore" replace /> : <Home />;
  };

  return (
    <div style={appStyle}>
      <style>{globalResponsiveStyles}</style>
      <Navbar />
      <div style={mainContentStyle}>
        {(showSidebar || !isMobile) && <Sidebar />}
        <main style={contentStyle} className="content-with-sidebar">
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/video/:videoId" element={<VideoPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/channel/:channelId" element={<ChannelPage />} />
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={
              isLoggedIn ? <ProfilePage /> : <Navigate to="/" />
            } />
            
            {/* Catch all */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App; 