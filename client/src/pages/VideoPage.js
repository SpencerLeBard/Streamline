import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useResponsive } from '../utils/responsive';
import { getSingleVideoById, getRelatedVideos } from '../context/VideoData';
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
      // Get video data and related videos from our data source
      const videoData = getSingleVideoById(videoId);
      const relatedVids = getRelatedVideos(videoId);
      
      setVideo(videoData);
      setRelatedVideos(relatedVids);
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