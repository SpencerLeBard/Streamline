import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not logged in
    if (!isLoggedIn) {
      navigate('/');
      return;
    }

    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    logout();
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data found.</div>;
  }

  // Styles
  const pageStyle = {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const headerStyle = {
    marginBottom: '30px'
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    marginBottom: '24px'
  };

  const buttonStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '16px'
  };

  const sectionsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '24px'
  };

  const sectionHeaderStyle = {
    borderBottom: '1px solid #eee',
    paddingBottom: '8px',
    marginBottom: '16px'
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h1>Your Profile</h1>
        <p>Manage your account and view your activity</p>
      </div>

      <div style={cardStyle}>
        <h2>Account Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.id}</p>
        <button style={buttonStyle} onClick={handleLogout}>Logout</button>
      </div>

      <div style={sectionsStyle}>
        <div style={cardStyle}>
          <h3 style={sectionHeaderStyle}>Your Videos</h3>
          <p>You haven't uploaded any videos yet.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={sectionHeaderStyle}>Saved Videos</h3>
          <p>No saved videos found.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 