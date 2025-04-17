import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = [
    'All', 'Music', 'Gaming', 'Sports', 'News', 
    'Education', 'Entertainment', 'Technology'
  ];

  useEffect(() => {
    // Simulate loading videos
    setLoading(true);
    
    setTimeout(() => {
      // Mock data
      const mockVideos = [
        {
          id: '1',
          title: 'Introduction to JavaScript',
          description: 'Learn the basics of JavaScript programming',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 15000,
          likes: 350,
          timestamp: '2 weeks ago',
          channelName: 'Code Masters',
          channelId: '1',
          category: 'Education'
        },
        {
          id: '2',
          title: 'React Hooks Tutorial',
          description: 'Understanding React Hooks with examples',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 8500,
          likes: 220,
          timestamp: '3 days ago',
          channelName: 'React Experts',
          channelId: '2',
          category: 'Technology'
        },
        {
          id: '3',
          title: 'Building a REST API with Node.js',
          description: 'Complete guide to building APIs with Node.js',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 12000,
          likes: 300,
          timestamp: '1 week ago',
          channelName: 'Backend Dev',
          channelId: '3',
          category: 'Technology'
        },
        {
          id: '4',
          title: 'CSS Grid Layout Explained',
          description: 'Master CSS Grid layout in 20 minutes',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 6000,
          likes: 150,
          timestamp: '1 month ago',
          channelName: 'CSS Wizards',
          channelId: '4',
          category: 'Education'
        }
      ];
      
      // Filter by category if not "All"
      const filteredVideos = selectedCategory === 'All' 
        ? mockVideos 
        : mockVideos.filter(video => video.category === selectedCategory);
      
      setVideos(filteredVideos);
      setLoading(false);
    }, 800);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return <div className="text-center p-8 yt-text-primary">Loading videos...</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold yt-text-primary mb-6">Discover Videos</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'yt-bg-red text-white'
                  : 'bg-gray-200 yt-text-secondary hover:bg-gray-300'
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {videos.length === 0 ? (
        <div className="text-center yt-text-secondary mt-10">
          No videos found. Try a different category or check back later.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map(video => (
            <div key={video.id} className="yt-bg-primary rounded-lg overflow-hidden shadow video-card">
              <Link to={`/video/${video.id}`}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-40 object-cover"
                />
              </Link>
              <div className="p-4">
                <Link 
                  to={`/video/${video.id}`}
                  className="text-lg font-semibold yt-text-primary hover:text-red-600 line-clamp-2"
                >
                  {video.title}
                </Link>
                <Link 
                  to={`/channel/${video.channelId}`}
                  className="text-sm yt-text-secondary hover:text-red-600 mt-2 block"
                >
                  {video.channelName}
                </Link>
                <p className="text-sm yt-text-secondary mt-1">
                  {video.views.toLocaleString()} views • {video.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home; 