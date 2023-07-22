const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  createdBy: {
    type: String,
  },
  post: mongoose.Schema.Types.ObjectId,
  ref: 'Post',
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
