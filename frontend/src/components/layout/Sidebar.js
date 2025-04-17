import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  
  // Check if the current path matches the link path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-64 yt-bg-primary p-6 hidden md:block border-r yt-border">
      <nav className="mt-6">
        <ul className="space-y-6">
          <li>
            <Link 
              to="/" 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-gray-100 yt-text-primary font-medium' 
                  : 'yt-text-secondary hover:bg-gray-100 hover:yt-text-primary'
              }`}
            >
              <FaHome className="mr-4 text-lg" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/search" 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive('/search') 
                  ? 'bg-gray-100 yt-text-primary font-medium' 
                  : 'yt-text-secondary hover:bg-gray-100 hover:yt-text-primary'
              }`}
            >
              <FaSearch className="mr-4 text-lg" />
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 