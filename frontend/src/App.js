import React from 'react';
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
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  const { isLoggedIn } = useAuth();

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
    padding: '24px',
    overflowY: 'auto',
    overflowX: 'hidden'
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <div style={mainContentStyle}>
        <Sidebar />
        <main style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:videoId" element={<VideoPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
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