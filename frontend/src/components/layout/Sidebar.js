import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 yt-bg-primary p-4 hidden md:block">
      <nav className="mt-6">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center px-4 py-2 yt-text-primary hover:bg-gray-100 rounded-md">
              <span className="ml-2">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex items-center px-4 py-2 yt-text-primary hover:bg-gray-100 rounded-md">
              <span className="ml-2">Search</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 