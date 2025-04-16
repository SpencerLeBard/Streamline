import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { FaEye } from 'react-icons/fa';

const VideoCard = ({ video }) => {
  const {
    _id,
    title,
    thumbnailUrl,
    user,
    views,
    createdAt,
    duration
  } = video;

  // Format video duration
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <Link to={`/video/${_id}`} className="block relative">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {duration && (
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
            {formatDuration(duration)}
          </span>
        )}
      </Link>
      <div className="p-3">
        <Link to={`/video/${_id}`}>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <div className="mt-2">
          <Link to={`/channel/${user._id}`} className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            {user.username}
          </Link>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
            <div className="flex items-center mr-3">
              <FaEye className="mr-1" />
              <span>{views.toLocaleString()} views</span>
            </div>
            <span>• {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard; 