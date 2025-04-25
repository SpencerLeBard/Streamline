import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ChannelPage = () => {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    
    // Mock data
    setTimeout(() => {
      const mockChannel = {
        id: channelId,
        name: 'Sample Channel',
        subscribers: 52000,
        description: 'This is a sample channel for video content creators.',
        avatar: 'https://via.placeholder.com/100',
        banner: 'https://via.placeholder.com/1200x300'
      };
      
      const mockVideos = [
        {
          id: '1',
          title: 'Getting Started with React',
          description: 'Learn the basics of React in this beginner-friendly tutorial',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 12000,
          timestamp: '1 week ago'
        },
        {
          id: '2',
          title: 'Advanced CSS Techniques',
          description: 'Master CSS with these advanced techniques',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 8000,
          timestamp: '2 weeks ago'
        },
        {
          id: '3',
          title: 'Node.js Crash Course',
          description: 'Get up to speed with Node.js quickly',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 6500,
          timestamp: '1 month ago'
        }
      ];
      
      setChannel(mockChannel);
      setVideos(mockVideos);
      setLoading(false);
    }, 500);
  }, [channelId]);

  if (loading) {
    return <div className="text-center p-8 yt-text-primary">Loading channel...</div>;
  }

  return (
    <div>
      {/* Channel Banner */}
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img src={channel.banner} alt={`${channel.name} banner`} className="w-full" />
      </div>
      
      {/* Channel Info */}
      <div className="yt-bg-primary p-6 shadow-sm rounded-b-lg flex items-center gap-6 mb-8">
        <img src={channel.avatar} alt={channel.name} className="w-20 h-20 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold yt-text-primary">{channel.name}</h1>
          <p className="yt-text-secondary">{channel.subscribers.toLocaleString()} subscribers</p>
          <p className="yt-text-secondary mt-2">{channel.description}</p>
        </div>
      </div>
      
      {/* Channel Videos */}
      <h2 className="text-xl font-semibold mb-4 yt-text-primary">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map(video => (
          <div key={video.id} className="yt-bg-primary rounded-lg overflow-hidden shadow">
            <Link to={`/video/${video.id}`}>
              <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
            </Link>
            <div className="p-4">
              <Link to={`/video/${video.id}`} className="text-lg font-semibold yt-text-primary hover:text-red-600">
                {video.title}
              </Link>
              <p className="text-sm yt-text-secondary mt-1">
                {video.views.toLocaleString()} views • {video.timestamp}
              </p>
              <p className="text-sm yt-text-secondary mt-2">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelPage; 