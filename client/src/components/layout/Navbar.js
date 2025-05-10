import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaSignOutAlt, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { useResponsive } from '../../utils/responsive';
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { isLoggedIn, login, logout } = useAuth();
  const { isMobile } = useResponsive();
  const navigate = useNavigate();

  // Hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setMobileSearchOpen(false);
    }
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setMobileMenuOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login();
    setShowLoginForm(false);
    setEmail('');
    setPassword('');
    setError('');
    setShowToast(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    logout();
    setShowToast(false);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (showLoginForm) setShowLoginForm(false);
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - Left aligned */}
        <Link to={isMobile ? "/explore" : "/home"} className="navbar-logo">
          Streamline
        </Link>

        {/* Search - Center aligned */}
        <div className="navbar-search">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <FaSearch color="#606060" size={14} />
            </button>
          </form>
        </div>

        {/* Actions - Right aligned */}
        <div className="navbar-actions">
          {!isLoggedIn && (
            <button className="login-button" onClick={toggleLoginForm}>
              Login
            </button>
          )}
          
          {isLoggedIn && (
            <button className="logout-button" onClick={handleLogout} aria-label="Logout">
              <FaSignOutAlt size={14} />
              <span className="logout-text">Logout</span>
            </button>
          )}
          
          <div 
            className={`profile-button ${isLoggedIn ? 'logged-in' : ''}`}
            onClick={() => {
              if (isLoggedIn) {
                navigate('/profile');
              } else {
                toggleLoginForm();
              }
            }}
          >
            <FaUser size={14} />
          </div>
        </div>

        {/* Mobile Menu Button - only in mobile, to the left of the logo */}
        {isMobile && (
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            style={{ position: 'absolute', left: 0 }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        {/* Mobile Actions */}
        {isMobile && (
          <div className="mobile-actions">
            <button 
              className="mobile-search-button"
              onClick={toggleMobileSearch}
              aria-label="Search"
            >
              <FaSearch size={16} />
            </button>
            {/* Login/Logout button for mobile instead of profile icon */}
            {!isLoggedIn ? (
              <button className="login-button mobile-login-button" onClick={toggleLoginForm}>
                Login
              </button>
            ) : (
              <button className="logout-button mobile-logout-button" onClick={handleLogout} aria-label="Logout">
                <FaSignOutAlt size={14} />
                <span className="logout-text">Logout</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Mobile Search */}
      <div className={`mobile-search-container ${mobileSearchOpen ? 'visible' : ''}`}>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            autoFocus
          />
          <button type="submit" className="search-button">
            <FaSearch color="#606060" size={14} />
          </button>
        </form>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'visible' : ''}`}>
        <Link to="/home" className="mobile-menu-link">
          <button className="mobile-menu-item" onClick={toggleMobileMenu}>
            <FaHome size={16} />
            Home
          </button>
        </Link>
        <Link to="/explore" className="mobile-menu-link">
          <button className="mobile-menu-item" onClick={toggleMobileMenu}>
            <FaSearch size={16} />
            Explore
          </button>
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="mobile-menu-link">
              <button className="mobile-menu-item" onClick={toggleMobileMenu}>
                <FaUser size={16} />
                Profile
              </button>
            </Link>
            <button className="mobile-menu-item" onClick={handleLogout}>
              <FaSignOutAlt size={16} />
              Logout
            </button>
          </>
        ) : (
          <button className="mobile-menu-item" onClick={toggleLoginForm}>
            <FaUser size={16} />
            Login
          </button>
        )}
      </div>

      {/* Login Form */}
      {!isLoggedIn && showLoginForm && (
        <div className="login-form">
          <h3 className="login-form-title">Login</h3>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="form-input"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="form-input"
            />
            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        </div>
      )}

      {/* Success Toast */}
      {showToast && (
        <div className={`toast ${showToast ? 'visible' : 'hidden'}`}>
          Login Success! Welcome back.
        </div>
      )}
    </nav>
  );
};

export default Navbar; 