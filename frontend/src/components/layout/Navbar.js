import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  // Simple CSS-in-JS styles to avoid any external CSS conflicts
  const navbarStyle = {
    backgroundColor: '#ffffff',
    padding: '16px 24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
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
    padding: '8px 16px 8px 16px',
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

  const profileStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    backgroundColor: '#f1f1f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px'
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

        {/* Profile */}
        <div style={profileStyle}>
          <span>👤</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 