import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useResponsive } from '../utils/responsive';

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

  // Define styles for consistency
  const containerStyle = {
    padding: isMobile ? '16px' : '20px 40px',
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 'bold',
    color: '#0f0f0f',
    marginBottom: '16px'
  };

  const resultCardStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    padding: isMobile ? '0' : '16px',
    marginBottom: '16px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  const thumbnailContainerStyle = {
    width: '100%',
    backgroundColor: '#e0e7ff',
    padding: isMobile ? '16px' : '0',
    display: isMobile ? 'block' : 'none',
  };

  const thumbnailStyle = {
    width: isMobile ? '100%' : '160px',
    height: isMobile ? 'auto' : '90px',
    aspectRatio: isMobile ? '16/9' : 'auto',
    objectFit: 'cover',
    backgroundColor: '#e0e7ff',
    marginBottom: isMobile ? '0' : '0',
    borderRadius: isMobile ? '8px' : '0'
  };

  const infoStyle = {
    padding: isMobile ? '16px' : '0 0 0 16px',
    flex: '1',
    backgroundColor: '#fff'
  };

  const videoTitleStyle = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f0f0f',
    marginBottom: '8px',
    textDecoration: 'none'
  };

  const metaTextStyle = {
    fontSize: '14px',
    color: '#606060',
    marginBottom: '4px'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#606060',
    marginTop: '8px'
  };

  if (loading) {
    return (
      <div style={{ ...containerStyle, textAlign: 'center', padding: '32px' }}>
        Loading results...
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Search Results for: {searchQuery}</h1>
      
      {results.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#606060' }}>
          No results found for "{searchQuery}"
        </div>
      ) : (
        <div>
          {results.map(video => (
            <div key={video.id} style={resultCardStyle}>
              {isMobile ? (
                <Link 
                  to={`/video/${video.id}`} 
                  style={{ 
                    display: 'block', 
                    width: '100%', 
                    flexShrink: 0,
                    ...thumbnailContainerStyle 
                  }}
                >
                  <img 
                    src={video.thumbnail} 
                    alt="" 
                    style={thumbnailStyle}
                  />
                </Link>
              ) : (
                <Link 
                  to={`/video/${video.id}`} 
                  style={{ 
                    display: 'block', 
                    width: 'auto', 
                    flexShrink: 0 
                  }}
                >
                  <img 
                    src={video.thumbnail} 
                    alt="" 
                    style={thumbnailStyle}
                  />
                </Link>
              )}
              <div style={infoStyle}>
                <Link 
                  to={`/video/${video.id}`} 
                  style={{ textDecoration: 'none' }}
                >
                  <h3 style={videoTitleStyle}>{video.title}</h3>
                </Link>
                <p style={metaTextStyle}>{video.views.toLocaleString()} views • {video.timestamp}</p>
                <Link 
                  to={`/channel/${video.channelId}`} 
                  style={{ ...metaTextStyle, textDecoration: 'none' }}
                >
                  {video.channelName}
                </Link>
                <p style={descriptionStyle}>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage; 