import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#ffffff',
    padding: '20px 24px',
    borderTop: '1px solid #e5e5e5',
    width: '100%',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const textStyle = {
    color: '#606060',
    fontSize: '14px'
  };

  const linkContainerStyle = {
    marginTop: '16px',
    display: 'flex'
  };

  const linkStyle = {
    color: '#606060',
    fontSize: '14px',
    textDecoration: 'none',
    marginLeft: '24px'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>
          &copy; {new Date().getFullYear()} VidStream. All rights reserved.
        </p>
        <div style={linkContainerStyle}>
          <a href="#" style={linkStyle}>Terms</a>
          <a href="#" style={linkStyle}>Privacy</a>
          <a href="#" style={linkStyle}>Help</a>
          <a href="#" style={linkStyle}>About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 