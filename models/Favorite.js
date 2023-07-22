const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
