import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useResponsive } from '../utils/responsive';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q') || '';
  const { isMobile } = useResponsive();

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
    return (
      <div className="search-results-container loading-container">
        Loading results...
      </div>
    );
  }

  return (
    <div className="search-results-container">
      <h1 className="search-results-title">Search Results for: {searchQuery}</h1>
      
      {results.length === 0 ? (
        <div className="no-results">
          No results found for "{searchQuery}"
        </div>
      ) : (
        <div>
          {results.map(video => (
            <div key={video.id} className="result-card">
              {isMobile ? (
                <Link 
                  to={`/video/${video.id}`} 
                  className="thumbnail-link thumbnail-container"
                >
                  <img 
                    src={video.thumbnail} 
                    alt="" 
                    className="thumbnail"
                  />
                </Link>
              ) : (
                <Link 
                  to={`/video/${video.id}`} 
                  className="thumbnail-link"
                >
                  <img 
                    src={video.thumbnail} 
                    alt="" 
                    className="thumbnail"
                  />
                </Link>
              )}
              <div className="info-container">
                <Link 
                  to={`/video/${video.id}`} 
                  className="title-link"
                >
                  <h3 className="video-title">{video.title}</h3>
                </Link>
                <p className="meta-text">{video.views.toLocaleString()} views • {video.timestamp}</p>
                <Link 
                  to={`/channel/${video.channelId}`} 
                  className="channel-link"
                >
                  {video.channelName}
                </Link>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage; 