import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-6xl font-bold yt-text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold yt-text-primary mb-6">Page Not Found</h2>
      <p className="yt-text-secondary mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 yt-bg-red text-white rounded-lg hover:bg-red-700 focus:outline-none"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage; 