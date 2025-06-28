// models/News.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // Remove required: true
  publicId: { type: String }, // Add publicId to schema
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
});

module.exports = mongoose.model('News', newsSchema);