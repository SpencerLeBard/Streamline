module.exports = (req, res) => {
  const { id } = req.query;
  console.log('Getting video with ID:', id);
  
  res.status(200).json({
    success: true,
    video: {
      id: id,
      title: `Sample Video ${id}`,
      description: 'This is a sample video',
      url: `https://example.com/video${id}.mp4`,
      thumbnail: `https://example.com/thumbnail${id}.jpg`,
      views: 1000,
      likes: 150
    }
  });
}; 