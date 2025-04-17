import React from 'react';

const Footer = () => {
  return (
    <footer className="yt-bg-primary py-5 px-6 border-t yt-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="yt-text-secondary">
          &copy; {new Date().getFullYear()} VidStream. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="yt-text-secondary hover:text-red-600 text-sm">Terms</a>
          <a href="#" className="yt-text-secondary hover:text-red-600 text-sm">Privacy</a>
          <a href="#" className="yt-text-secondary hover:text-red-600 text-sm">Help</a>
          <a href="#" className="yt-text-secondary hover:text-red-600 text-sm">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 