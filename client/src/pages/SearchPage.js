import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaSearch, FaEye, FaThumbsUp, FaClock } from 'react-icons/fa';
import { useResponsive } from '../utils/responsive';
import { getSearchResults } from '../context/VideoData';
import './SearchPage.css';

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
      const results = getSearchResults(query);
      setSearchResults(results);
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

  return (
    <div className="search-page">
      <div className="main-content">
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <FaSearch color="#606060" size={18} />
            </button>
          </form>
        </div>

        {loading ? (
          <div className="loading">
            <div>Searching for videos...</div>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="no-results">
            {searchParams.get('q') 
              ? `No results found for "${searchParams.get('q')}"` 
              : 'Enter a search term to find videos'}
          </div>
        ) : (
          <div className="video-grid">
            {searchResults.map((video) => (
              <div key={video.id} className="video-card">
                <Link to={`/video/${video.id}`} className="link-style">
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="thumbnail"
                  />
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <Link to={`/channel/${video.channelId}`} className="channel-name">
                      {video.channelName}
                    </Link>
                    <div className="video-stats">
                      <div className="stat-item">
                        <FaEye size={12} />
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                      <div className="stat-item">
                        <FaThumbsUp size={12} />
                        <span>{video.likes}</span>
                      </div>
                      <div className="stat-item">
                        <FaClock size={12} />
                        <span>{video.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 