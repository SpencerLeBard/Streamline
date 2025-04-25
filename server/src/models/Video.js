const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Music', 'Gaming', 'Sports', 'News', 'Education', 'Entertainment', 'Technology', 'Other'],
    default: 'Other'
  },
  duration: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  tags: [String],
  visibility: {
    type: String,
    enum: ['public', 'unlisted', 'private'],
    default: 'public'
  },
  publishedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Virtual for like count
VideoSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

// Virtual for dislike count
VideoSchema.virtual('dislikeCount').get(function() {
  return this.dislikes.length;
});

// Add text index for search functionality
VideoSchema.index({ title: 'text', description: 'text', tags: 'text' });

module.exports = mongoose.model('Video', VideoSchema); 