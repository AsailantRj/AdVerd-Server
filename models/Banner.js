const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  location: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('Banner', bannerSchema);
