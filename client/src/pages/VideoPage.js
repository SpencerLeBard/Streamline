import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useResponsive } from '../utils/responsive';

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

  // Styles
  const pageContainerStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile || isTablet ? '1fr' : '2fr 1fr',
    gap: isMobile ? '16px' : '24px',
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const videoColumnStyle = {
    width: '100%'
  };

  const videoPlayerStyle = {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
    backgroundColor: '#000',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none'
  };

  const videoInfoStyle = {
    marginTop: '16px'
  };

  const videoTitleStyle = {
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 'bold',
    color: '#0f0f0f',
    marginBottom: '8px'
  };

  const videoMetaStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px',
    fontSize: '14px',
    color: '#606060'
  };

  const actionButtonsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: isMobile ? '8px' : '0'
  };

  const channelInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e5e5e5'
  };

  const channelAvatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%'
  };

  const channelTextStyle = {
    marginLeft: '12px'
  };

  const channelNameStyle = {
    fontWeight: '500',
    color: '#0f0f0f',
    textDecoration: 'none'
  };

  const subscriberCountStyle = {
    fontSize: '14px',
    color: '#606060'
  };

  const descriptionStyle = {
    marginTop: '16px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    color: '#0f0f0f',
    whiteSpace: 'pre-line'
  };

  const relatedVideosStyle = {
    marginTop: isMobile ? '24px' : '0'
  };

  const relatedTitleStyle = {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '16px',
    color: '#0f0f0f'
  };

  const relatedItemStyle = {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px'
  };

  const relatedThumbnailStyle = {
    width: isMobile ? '120px' : '160px',
    height: isMobile ? '68px' : '90px',
    objectFit: 'cover',
    borderRadius: '8px',
    flexShrink: 0
  };

  const relatedVideoTitleStyle = {
    fontWeight: '500',
    fontSize: '14px',
    color: '#0f0f0f',
    textDecoration: 'none',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  const relatedChannelStyle = {
    fontSize: '13px',
    color: '#606060',
    textDecoration: 'none'
  };

  const relatedMetaStyle = {
    fontSize: '12px',
    color: '#606060'
  };

  if (loading) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '32px',
        color: '#0f0f0f',
        fontSize: '16px'
      }}>
        Loading video...
      </div>
    );
  }

  if (!video) {
    return (
      <div style={{ 
        textAlign: 'center', 
        color: '#ff0000',
        marginTop: '40px',
        fontSize: '16px'
      }}>
        Video not found
      </div>
    );
  }

  return (
    <div style={pageContainerStyle}>
      <div style={videoColumnStyle}>
        {/* Video Player */}
        <div style={videoPlayerStyle}>
          <iframe
            src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
            style={iframeStyle}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Information */}
        <div style={videoInfoStyle}>
          <h1 style={videoTitleStyle}>
            {video.title}
          </h1>
          
          <div style={videoMetaStyle}>
            <div>
              <span>{video.views.toLocaleString()} views</span>
              <span style={{ margin: '0 8px' }}>•</span>
              <span>{new Date(video.createdAt).toLocaleDateString()}</span>
            </div>
            
            <div style={actionButtonsStyle}>
              <button style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>👍</span>
                <span>{video.likes.toLocaleString()}</span>
              </button>
              
              <button style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>👎</span>
              </button>
              
              <button style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>🔗 Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Channel Info */}
        <div style={channelInfoStyle}>
          <img 
            src={video.channelAvatar} 
            alt={video.channelName}
            style={channelAvatarStyle}
          />
          <div style={channelTextStyle}>
            <Link to={`/channel/${video.channelId}`} style={channelNameStyle}>
              {video.channelName}
            </Link>
            <p style={subscriberCountStyle}>{video.subscribers.toLocaleString()} subscribers</p>
          </div>
        </div>

        {/* Video Description */}
        <div style={descriptionStyle}>
          <p>
            {video.description}
          </p>
        </div>
      </div>

      {/* Related Videos */}
      <div style={relatedVideosStyle}>
        <h3 style={relatedTitleStyle}>Related Videos</h3>
        <div>
          {relatedVideos.map(relatedVideo => (
            <div key={relatedVideo.id} style={relatedItemStyle}>
              <Link to={`/video/${relatedVideo.id}`}>
                <img 
                  src={relatedVideo.thumbnail} 
                  alt={relatedVideo.title} 
                  style={relatedThumbnailStyle}
                />
              </Link>
              <div>
                <Link 
                  to={`/video/${relatedVideo.id}`} 
                  style={relatedVideoTitleStyle}
                >
                  {relatedVideo.title}
                </Link>
                <div>
                  <Link 
                    to={`/channel/${relatedVideo.channelId}`} 
                    style={relatedChannelStyle}
                  >
                    {relatedVideo.channelName}
                  </Link>
                  <p style={relatedMetaStyle}>
                    {relatedVideo.views.toLocaleString()} views • {relatedVideo.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage; 