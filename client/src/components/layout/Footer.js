import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">
          &copy; {new Date().getFullYear()} VidStream. All rights reserved.
        </p>
        <div className="link-container">
          <a href="#" className="link">Terms</a>
          <a href="#" className="link">Privacy</a>
          <a href="#" className="link">Help</a>
          <a href="#" className="link">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 