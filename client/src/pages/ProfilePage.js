import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

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
    return <div className="loading-container">Loading...</div>;
  }

  if (!user) {
    return <div className="error-container">No user data found.</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Your Profile</h1>
        <p>Manage your account and view your activity</p>
      </div>

      <div className="profile-card">
        <h2>Account Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.id}</p>
        <button className="profile-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="profile-sections">
        <div className="profile-card">
          <h3 className="section-header">Your Videos</h3>
          <p>You haven't uploaded any videos yet.</p>
        </div>

        <div className="profile-card">
          <h3 className="section-header">Saved Videos</h3>
          <p>No saved videos found.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 