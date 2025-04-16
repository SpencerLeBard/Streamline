import React from 'react';

const Footer = () => {
  return (
    <footer className="yt-bg-primary py-4 px-6 border-t yt-border">
      <div className="container mx-auto">
        <p className="text-center yt-text-secondary">
          &copy; {new Date().getFullYear()} VidStream. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 