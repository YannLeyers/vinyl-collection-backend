const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: String,
  artist: String,
  year: Number,
  inCollection: Boolean,
  inWishlist: Boolean,
});

module.exports = mongoose.model('Album', albumSchema);
