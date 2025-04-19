import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Music',
    'Gaming',
    'Sports',
    'News',
    'Education',
    'Entertainment',
    'Technology',
  ];

  /* ─────────────────────────── load mock data ─────────────────────────── */
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
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
          category: 'Education',
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
          category: 'Technology',
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
          category: 'Technology',
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
          category: 'Education',
        },
      ];

      const filteredVideos =
        selectedCategory === 'All'
          ? mockVideos
          : mockVideos.filter((v) => v.category === selectedCategory);

      setVideos(filteredVideos);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  /* ────────────────────────────── handlers ────────────────────────────── */
  const handleCategoryChange = (category) => setSelectedCategory(category);

  /* ─────────────────────────────── render ─────────────────────────────── */
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-lg text-gray-600">
        Loading videos…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ───────────────────────────── header ───────────────────────────── */}
      <header className="sticky top-0 z-10 w-full border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* slim, wide logo on the left */}
          <Link to="/" className="flex items-center">
            <img
              src="/SkinnyLogo.jpeg"
              alt="Streamline"
              className="h-6 w-auto object-contain sm:h-7"
            />
          </Link>
          <div className="flex-1 mx-8">
            {/* Additional space for navbar content */}
          </div>
        </div>
      </header>

      {/* ───────────────────── horizontal category bar ───────────────────── */}
      <nav className="mx-auto max-w-7xl overflow-x-auto px-6 py-4">
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 font-semibold text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* ─────────────────────────── video grid ─────────────────────────── */}
      <main className="mx-auto max-w-7xl px-6 pb-10">
        {videos.length === 0 ? (
          <div className="mt-20 text-center text-gray-500">
            No videos found. Try another category.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-shadow"
              >
                <Link to={`/video/${video.id}`}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-48 w-full object-cover transition-transform duration-200 hover:scale-[1.03]"
                  />
                </Link>

                <div className="p-4">
                  <Link
                    to={`/video/${video.id}`}
                    className="line-clamp-2 text-lg font-semibold text-gray-900 hover:text-red-600"
                  >
                    {video.title}
                  </Link>

                  <Link
                    to={`/channel/${video.channelId}`}
                    className="mt-2 block text-sm text-gray-600 hover:text-red-600"
                  >
                    {video.channelName}
                  </Link>

                  <p className="mt-1 text-sm text-gray-600">
                    {video.views.toLocaleString()} views • {video.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
