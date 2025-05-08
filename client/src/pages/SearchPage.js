import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaSearch, FaEye, FaThumbsUp, FaClock } from 'react-icons/fa';
import { useResponsive } from '../utils/responsive';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchTerm(query);
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = (query) => {
    setLoading(true);
    
    // Simulate API call for search results
    setTimeout(() => {
      const mockResults = [
        {
          id: '1',
          title: `Results for "${query}": JavaScript Tutorial`,
          description: 'Learn the basics of JavaScript programming',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 15000,
          likes: 350,
          timestamp: '2 weeks ago',
          channelName: 'Code Masters',
          channelId: '1',
          category: 'Education',
        },
        {
          id: '2',
          title: `${query} in React: useState and useEffect Hooks`,
          description: 'Understanding React Hooks with examples',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 8500,
          likes: 220,
          timestamp: '3 days ago',
          channelName: 'React Experts',
          channelId: '2',
          category: 'Technology',
        },
        {
          id: '3',
          title: `Building ${query} APIs with Node.js`,
          description: 'Complete guide to building APIs with Node.js',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 12000,
          likes: 300,
          timestamp: '1 week ago',
          channelName: 'Backend Dev',
          channelId: '3',
          category: 'Technology',
        },
        {
          id: '4',
          title: `${query} CSS Grid Layout Explained`,
          description: 'Master CSS Grid layout in 20 minutes',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 6000,
          likes: 150,
          timestamp: '1 month ago',
          channelName: 'CSS Wizards',
          channelId: '4',
          category: 'Education',
        },
      ];
      
      setSearchResults(mockResults);
      setLoading(false);
    }, 800);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ q: searchTerm.trim() });
      performSearch(searchTerm.trim());
    }
  };

  // Styles
  const pageStyle = {
    backgroundColor: '#ffffff',
    minHeight: 'calc(100vh - 70px)', // Adjust for navbar height
    width: '100%',
    overflowX: 'hidden'
  };

  const mainContentStyle = {
    padding: isMobile ? '16px' : '20px 40px',
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%'
  };

  const searchContainerStyle = {
    width: '100%',
    maxWidth: '640px',
    margin: '0 auto 40px',
    position: 'relative'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    paddingRight: '60px',
    borderRadius: '24px',
    border: '1px solid #e5e5e5',
    fontSize: '16px',
    outline: 'none'
  };

  const buttonStyle = {
    position: 'absolute',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    backgroundColor: '#f1f1f1',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  const resultsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const resultCardStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    padding: isMobile ? '0' : '16px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    gap: isMobile ? '0' : '20px',
    overflow: 'hidden'
  };

  const thumbnailContainerStyle = {
    width: '100%',
    backgroundColor: '#e0e7ff',
    padding: isMobile ? '16px' : '0',
    display: isMobile ? 'block' : 'none',
  };

  const thumbnailStyle = {
    width: isMobile ? '100%' : '240px',
    height: isMobile ? 'auto' : '135px',
    objectFit: 'cover',
    borderRadius: '8px',
    backgroundColor: '#e0e7ff'
  };

  const infoContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile ? '16px' : '0',
    backgroundColor: '#fff'
  };

  const titleStyle = {
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: '500',
    color: '#0f0f0f',
    marginBottom: '8px',
    textDecoration: 'none'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#606060',
    marginBottom: '12px'
  };

  const channelNameStyle = {
    fontSize: '14px',
    color: '#606060',
    textDecoration: 'none',
    marginBottom: '8px'
  };

  const statsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '13px',
    color: '#606060',
    gap: '8px'
  };

  const statItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginRight: '8px'
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '18px',
    color: '#606060'
  };

  const noResultsStyle = {
    textAlign: 'center',
    padding: '40px 0',
    color: '#606060',
    fontSize: '16px'
  };

  return (
    <div style={pageStyle}>
      <div style={mainContentStyle}>
        <div style={searchContainerStyle}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              <FaSearch color="#606060" size={18} />
            </button>
          </form>
        </div>

        {loading ? (
          <div style={loadingStyle}>
            <div>Searching for videos...</div>
          </div>
        ) : searchResults.length === 0 ? (
          <div style={noResultsStyle}>
            {searchParams.get('q') 
              ? `No results found for "${searchParams.get('q')}"` 
              : 'Enter a search term to find videos'}
          </div>
        ) : (
          <div style={resultsContainerStyle}>
            {searchResults.map((result) => (
              <div key={result.id} style={resultCardStyle}>
                {isMobile ? (
                  <Link to={`/video/${result.id}`} style={{ 
                    width: '100%',
                    display: 'block',
                    ...thumbnailContainerStyle
                  }}>
                    <img 
                      src={result.thumbnail} 
                      alt="" 
                      style={thumbnailStyle}
                    />
                  </Link>
                ) : (
                  <Link to={`/video/${result.id}`} style={{ width: 'auto' }}>
                    <img 
                      src={result.thumbnail} 
                      alt="" 
                      style={thumbnailStyle}
                    />
                  </Link>
                )}
                <div style={infoContainerStyle}>
                  <Link to={`/video/${result.id}`} style={{ textDecoration: 'none' }}>
                    <h3 style={titleStyle}>{result.title}</h3>
                  </Link>
                  <p style={descriptionStyle}>{result.description}</p>
                  <Link to={`/channel/${result.channelId}`} style={channelNameStyle}>
                    {result.channelName}
                  </Link>
                  <div style={statsStyle}>
                    <div style={statItemStyle}>
                      <FaEye size={12} />
                      <span>{result.views.toLocaleString()} views</span>
                    </div>
                    <div style={statItemStyle}>
                      <FaThumbsUp size={12} />
                      <span>{result.likes}</span>
                    </div>
                    <div style={statItemStyle}>
                      <FaClock size={12} />
                      <span>{result.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 