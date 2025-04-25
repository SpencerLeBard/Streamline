module.exports = (req, res) => {
  console.log('Getting all videos');
  res.status(200).json({
    success: true,
    videos: [
      {
        id: '1',
        title: 'Sample Video 1',
        description: 'This is a sample video',
        url: 'https://example.com/video1.mp4',
        thumbnail: 'https://example.com/thumbnail1.jpg',
        views: 1000,
        likes: 150
      },
      {
        id: '2',
        title: 'Sample Video 2',
        description: 'Another sample video',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://example.com/thumbnail2.jpg',
        views: 2000,
        likes: 300
      }
    ]
  });
}; 