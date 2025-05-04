import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaSignOutAlt, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { useResponsive } from '../../utils/responsive';

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
  const { isMobile, isTablet } = useResponsive();
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
    console.log("Toggle login form called, current state:", showLoginForm);
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

  // Styles
  const navbarStyle = {
    backgroundColor: '#ffffff',
    padding: '12px 16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%'
  };

  const logoStyle = {
    color: '#ff0000',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none'
  };

  const searchContainerStyle = {
    width: '400px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'block'
  };

  const mobileSearchContainerStyle = {
    width: '100%',
    padding: '10px 16px',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '60px',
    left: 0,
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: mobileSearchOpen ? 'block' : 'none'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 16px',
    paddingRight: '50px',
    borderRadius: '20px',
    border: '1px solid #e5e5e5',
    outline: 'none'
  };

  const buttonStyle = {
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '32px',
    width: '32px',
    borderRadius: '50%',
    backgroundColor: '#f1f1f1',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  const loginButtonStyle = {
    height: '40px',
    padding: '0 16px',
    marginRight: '10px',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  const profileStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    backgroundColor: isLoggedIn ? '#4CAF50' : '#f1f1f1',
    color: isLoggedIn ? '#ffffff' : '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    cursor: 'pointer'
  };

  const logoutButtonStyle = {
    height: '40px',
    padding: '0 16px',
    marginRight: '10px',
    backgroundColor: isLoggedIn ? '#ff0000' : 'transparent',
    color: isLoggedIn ? '#ffffff' : 'transparent',
    border: 'none',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: isLoggedIn ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    pointerEvents: isLoggedIn ? 'auto' : 'none',
    opacity: isLoggedIn ? 1 : 0
  };

  const loginFormStyle = {
    position: 'absolute',
    right: '10px',
    top: '70px',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    zIndex: 1001,
    width: '300px'
  };

  const toastStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '16px',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    transition: 'all 0.3s ease-in-out',
    transform: showToast ? 'translateX(0)' : 'translateX(120%)'
  };

  const actionsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const mobileMenuButtonStyle = {
    display: isMobile ? 'block' : 'none',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#606060'
  };

  const mobileSearchButtonStyle = {
    display: isMobile ? 'block' : 'none',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#606060',
    marginRight: '10px'
  };

  const mobileMenuStyle = {
    display: mobileMenuOpen ? 'flex' : 'none',
    position: 'fixed',
    top: '60px',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: '16px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 999
  };

  const mobileMenuItemStyle = {
    padding: '12px 16px',
    borderBottom: '1px solid #eee',
    width: '100%',
    textAlign: 'left',
    fontSize: '16px',
    background: 'none',
    border: 'none',
    color: '#333',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  // Media queries styles as inline object-based
  const mediaStyles = `
    @media (max-width: 768px) {
      .desktop-search {
        display: none !important;
      }
      .mobile-actions {
        display: flex !important;
      }
      .desktop-actions {
        display: none !important;
      }
    }
    
    @media (min-width: 769px) {
      .mobile-actions {
        display: none !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <button 
                onClick={toggleMobileMenu}
                style={mobileMenuButtonStyle}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            )}
            
            <Link to={isMobile ? "/explore" : "/home"} style={{textDecoration: 'none'}}>
              <span style={logoStyle}>Streamline</span>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          {!isMobile && (
            <div style={searchContainerStyle} className="desktop-search">
              <form onSubmit={handleSearch} style={{position: 'relative'}}>
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                  <FaSearch color="#606060" />
                </button>
              </form>
            </div>
          )}

          {/* Desktop Actions */}
          <div style={actionsContainerStyle} className="desktop-actions">
            {/* Login Button - only show when not logged in */}
            {!isLoggedIn && (
              <button 
                style={loginButtonStyle}
                onClick={toggleLoginForm}
              >
                Login
              </button>
            )}
            
            {/* Logout Button - only show when logged in */}
            {isLoggedIn && (
              <button 
                style={logoutButtonStyle} 
                onClick={handleLogout}
                aria-label="Logout"
              >
                <FaSignOutAlt />
                <span style={{ marginLeft: '5px' }}>Logout</span>
              </button>
            )}
            
            {/* Profile Icon */}
            <div 
              style={profileStyle} 
              onClick={() => {
                if (isLoggedIn) {
                  navigate('/profile');
                } else {
                  toggleLoginForm();
                }
              }}
            >
              <FaUser />
            </div>
          </div>

          {/* Mobile Actions */}
          <div style={{ display: 'none' }} className="mobile-actions">
            <button 
              onClick={toggleMobileSearch}
              style={mobileSearchButtonStyle}
              aria-label="Search"
            >
              <FaSearch />
            </button>
            
            <div 
              style={profileStyle}
              onClick={() => {
                if (isLoggedIn) {
                  navigate('/profile');
                } else {
                  toggleLoginForm();
                }
              }}
            >
              <FaUser />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {isMobile && mobileSearchOpen && (
          <div style={mobileSearchContainerStyle}>
            <form onSubmit={handleSearch} style={{position: 'relative'}}>
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={inputStyle}
                autoFocus
              />
              <button type="submit" style={buttonStyle}>
                <FaSearch color="#606060" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        <div style={mobileMenuStyle}>
          <Link to="/home" style={{ textDecoration: 'none', width: '100%' }}>
            <button style={mobileMenuItemStyle} onClick={toggleMobileMenu}>
              <FaHome />
              Home
            </button>
          </Link>
          <Link to="/explore" style={{ textDecoration: 'none', width: '100%' }}>
            <button style={mobileMenuItemStyle} onClick={toggleMobileMenu}>
              <FaSearch />
              Explore
            </button>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" style={{ textDecoration: 'none', width: '100%' }}>
                <button style={mobileMenuItemStyle} onClick={toggleMobileMenu}>
                  <FaUser />
                  Profile
                </button>
              </Link>
              <button style={mobileMenuItemStyle} onClick={handleLogout}>
                <FaSignOutAlt />
                Logout
              </button>
            </>
          ) : (
            <button style={mobileMenuItemStyle} onClick={toggleLoginForm}>
              <FaUser />
              Login
            </button>
          )}
        </div>

        {/* Login Form */}
        {!isLoggedIn && showLoginForm && (
          <div style={loginFormStyle}>
            <h3 style={{ marginBottom: '15px' }}>Login</h3>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                style={{ 
                  marginBottom: '10px', 
                  width: '100%', 
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #e5e5e5'
                }}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                style={{ 
                  marginBottom: '15px', 
                  width: '100%', 
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #e5e5e5'
                }}
              />
              <button 
                type="submit" 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  backgroundColor: '#ff0000', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Login
              </button>
            </form>
          </div>
        )}

        {/* Success Toast */}
        {showToast && (
          <div style={toastStyle}>
            Login Success! Welcome back.
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar; 