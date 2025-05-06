import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q') || '';

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    
    // Mocking search results
    setTimeout(() => {
      const mockResults = [
        {
          id: '1',
          title: 'How to Build a React App',
          description: 'Learn how to build a React application from scratch',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 15000,
          timestamp: '2 weeks ago',
          channelName: 'Code Channel',
          channelId: '1'
        },
        {
          id: '2',
          title: 'JavaScript Tips and Tricks',
          description: 'Advanced JavaScript techniques for better code',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 8500,
          timestamp: '3 days ago',
          channelName: 'JS Masters',
          channelId: '2'
        },
        {
          id: '3',
          title: 'CSS Grid Layout Tutorial',
          description: 'Complete guide to CSS Grid Layout',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 6200,
          timestamp: '1 month ago',
          channelName: 'Web Design Pro',
          channelId: '3'
        }
      ];
      
      setResults(mockResults);
      setLoading(false);
    }, 500);
  }, [searchQuery]);

  if (loading) {
    return <div className="text-center p-8 yt-text-primary">Loading results...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold yt-text-primary mb-6">Search Results for: {searchQuery}</h1>
      
      {results.length === 0 ? (
        <p className="yt-text-secondary">No results found for "{searchQuery}"</p>
      ) : (
        <div className="space-y-4">
          {results.map(video => (
            <div key={video.id} className="flex yt-bg-primary rounded-lg overflow-hidden shadow">
              <Link to={`/video/${video.id}`} className="flex-shrink-0">
                <img 
                  src={video.thumbnail} 
                  alt="" 
                  className="w-40 h-24 object-cover" 
                  style={{ backgroundColor: '#e0e7ff' }} 
                />
              </Link>
              <div className="p-4">
                <Link to={`/video/${video.id}`} className="text-lg font-semibold yt-text-primary hover:text-red-600">
                  {video.title}
                </Link>
                <p className="text-sm yt-text-secondary">{video.views.toLocaleString()} views • {video.timestamp}</p>
                <Link to={`/channel/${video.channelId}`} className="text-sm yt-text-secondary hover:text-red-600">
                  {video.channelName}
                </Link>
                <p className="text-sm yt-text-secondary mt-1">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage; 