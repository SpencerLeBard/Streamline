import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const VideoPage = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedVideos, setRelatedVideos] = useState([]);
  
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
    return <div className="text-center p-8 yt-text-primary">Loading video...</div>;
  }

  if (!video) {
    return <div className="text-center text-red-500 mt-10">Video not found</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        {/* Video Player */}
        <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
            className="absolute top-0 left-0 w-full h-full"
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Information */}
        <div className="mt-4">
          <h1 className="text-xl md:text-2xl font-bold yt-text-primary">
            {video.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between mt-2 text-sm yt-text-secondary">
            <div>
              <span>{video.views.toLocaleString()} views</span>
              <span className="mx-2">•</span>
              <span>{new Date(video.createdAt).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <button className="flex items-center space-x-1">
                <span>👍</span>
                <span>{video.likes.toLocaleString()}</span>
              </button>
              
              <button className="flex items-center space-x-1">
                <span>👎</span>
              </button>
              
              <button className="flex items-center space-x-1">
                <span>🔗 Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Channel Info */}
        <div className="flex items-center mt-4 pb-4 border-b yt-border">
          <img 
            src={video.channelAvatar} 
            alt={video.channelName}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <Link to={`/channel/${video.channelId}`} className="font-medium yt-text-primary hover:text-red-600">
              {video.channelName}
            </Link>
            <p className="text-sm yt-text-secondary">{video.subscribers.toLocaleString()} subscribers</p>
          </div>
        </div>

        {/* Video Description */}
        <div className="mt-4 p-4 yt-bg-primary rounded-lg">
          <p className="yt-text-primary whitespace-pre-line">
            {video.description}
          </p>
        </div>
      </div>

      {/* Related Videos */}
      <div className="lg:col-span-1">
        <h3 className="font-medium text-lg mb-4 yt-text-primary">Related Videos</h3>
        <div className="space-y-4">
          {relatedVideos.map(relatedVideo => (
            <div key={relatedVideo.id} className="flex space-x-2">
              <Link to={`/video/${relatedVideo.id}`} className="flex-shrink-0">
                <img 
                  src={relatedVideo.thumbnail} 
                  alt={relatedVideo.title} 
                  className="w-40 h-24 object-cover rounded-lg"
                />
              </Link>
              <div>
                <Link 
                  to={`/video/${relatedVideo.id}`} 
                  className="font-medium yt-text-primary hover:text-red-600 line-clamp-2"
                >
                  {relatedVideo.title}
                </Link>
                <Link 
                  to={`/channel/${relatedVideo.channelId}`} 
                  className="text-sm yt-text-secondary hover:text-red-600"
                >
                  {relatedVideo.channelName}
                </Link>
                <p className="text-xs yt-text-secondary">
                  {relatedVideo.views.toLocaleString()} views • {relatedVideo.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage; 