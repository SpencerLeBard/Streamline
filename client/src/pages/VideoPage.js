import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useResponsive } from '../utils/responsive';
import './VideoPage.css';

const VideoPage = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { isMobile, isTablet } = useResponsive();
  
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    
    setTimeout(() => {
      // Mock video data
      const mockVideo = {
        id: videoId,
        title: 'How to Build Modern Web Applications',
        description: 'In this comprehensive tutorial, we explore the fundamentals of building modern web applications using React, Node.js, and MongoDB. Learn about state management, routing, API integration, and more.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'https://via.placeholder.com/640x360',
        views: 125000,
        likes: 3200,
        createdAt: '2023-09-15T14:48:00.000Z',
        category: 'Technology',
        channelName: 'Web Dev Tutorials',
        channelId: '1',
        channelAvatar: 'https://via.placeholder.com/40',
        subscribers: 52000
      };
      
      // Mock related videos
      const mockRelatedVideos = [
        {
          id: '2',
          title: 'React Hooks Explained',
          description: 'Learn how to use React Hooks effectively',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 75000,
          timestamp: '1 month ago',
          channelName: 'React Masters',
          channelId: '2'
        },
        {
          id: '3',
          title: 'Node.js REST API Tutorial',
          description: 'Build a complete REST API with Node.js and Express',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 42000,
          timestamp: '2 weeks ago',
          channelName: 'Backend Dev',
          channelId: '3'
        },
        {
          id: '4',
          title: 'MongoDB for Beginners',
          description: 'Getting started with MongoDB database',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 35000,
          timestamp: '3 months ago',
          channelName: 'Database Pro',
          channelId: '4'
        }
      ];
      
      setVideo(mockVideo);
      setRelatedVideos(mockRelatedVideos);
      setLoading(false);
    }, 800);
  }, [videoId]);

  if (loading) {
    return (
      <div className="loading-container">
        Loading video...
      </div>
    );
  }

  if (!video) {
    return (
      <div className="error-container">
        Video not found
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="video-column">
        {/* Video Player */}
        <div className="video-player">
          <iframe
            className="video-iframe"
            src={`https://www.youtube.com/embed/${video.videoUrl.split('v=')[1]}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info */}
        <div className="video-info">
          <h1 className="video-title">{video.title}</h1>
          
          <div className="video-meta">
            <div>
              {video.views.toLocaleString()} views • {new Date(video.createdAt).toLocaleDateString()}
            </div>
            
            <div className="action-buttons">
              <div>{video.likes.toLocaleString()} likes</div>
            </div>
          </div>
          
          {/* Channel Info */}
          <div className="channel-info">
            <img src={video.channelAvatar} alt="" className="channel-avatar" />
            <div className="channel-text">
              <Link to={`/channel/${video.channelId}`} className="channel-name">
                {video.channelName}
              </Link>
              <div className="subscriber-count">
                {video.subscribers.toLocaleString()} subscribers
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="video-description">
            {video.description}
          </div>
        </div>
      </div>

      {/* Related Videos */}
      <div className="related-videos">
        <h3 className="related-title">Related Videos</h3>
        
        {relatedVideos.map(relatedVideo => (
          <Link key={relatedVideo.id} to={`/video/${relatedVideo.id}`} style={{ textDecoration: 'none' }}>
            <div className="related-item">
              <img
                src={relatedVideo.thumbnail}
                alt=""
                className="related-thumbnail"
              />
              <div>
                <h4 className="related-video-title">{relatedVideo.title}</h4>
                <div className="related-channel">{relatedVideo.channelName}</div>
                <div className="related-meta">
                  {relatedVideo.views.toLocaleString()} views • {relatedVideo.timestamp}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoPage; 