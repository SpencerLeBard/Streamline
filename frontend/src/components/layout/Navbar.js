import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const { isLoggedIn, login, logout } = useAuth();
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
    }
  };

  const toggleLoginForm = () => {
    console.log("Toggle login form called, current state:", showLoginForm);
    setShowLoginForm(!showLoginForm);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting to login with:', { email, password });
      const response = await fetch('http://localhost:5002/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);
      
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        login();
        setShowLoginForm(false);
        setEmail('');
        setPassword('');
        setError('');
        setShowToast(true);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    logout();
    setShowToast(false);
  };

  // Styles
  const navbarStyle = {
    backgroundColor: '#ffffff',
    padding: '16px 24px',
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
    transform: 'translateX(-50%)'
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

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link to="/" style={{textDecoration: 'none'}}>
          <span style={logoStyle}>Streamline</span>
        </Link>

        {/* Search Bar */}
        <div style={searchContainerStyle}>
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

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          {/* For debugging - login toggle button */}
          {!isLoggedIn && (
            <button 
              style={loginButtonStyle}
              onClick={toggleLoginForm}
            >
              Login
            </button>
          )}
          
          {/* Logout Button */}
          <button 
            style={logoutButtonStyle} 
            onClick={handleLogout}
            aria-label="Logout"
          >
            <FaSignOutAlt />
            <span style={{ marginLeft: '5px' }}>Logout</span>
          </button>
          
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
      </div>

      {/* Login Form */}
      {!isLoggedIn && showLoginForm && (
        <div style={loginFormStyle}>
          <h3 style={{ marginBottom: '15px' }}>Login</h3>
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
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
  );
};

export default Navbar; 