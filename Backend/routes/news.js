const express = require('express');
const router = express.Router();
const News = require('../models/News');
const auth = require('../middleware/auth');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();




cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// Custom upload function to Cloudinary with explicit folder
const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "Uploads" }, // Explicitly set folder
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(file.buffer);
  });
};

// Multer error handling middleware
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error('Multer error:', err.message);
    return res.status(400).json({ message: `Multer error: ${err.message}` });
  } else if (err) {
    console.error('File upload error:', err.message);
    return res.status(400).json({ message: err.message });
  }
  next();
};

router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    console.error('GET /news - Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post('/', auth, upload.single('image'), handleMulterError, async (req, res) => {
  console.log('POST /news - Request body:', req.body);
  console.log('POST /news - File received:', req.file);
  try {
    if (!req.file) {
      console.log('POST /news - No file uploaded - Check file format or size limit');
      return res.status(400).json({ message: 'No image file uploaded' });
    }

    const result = await uploadToCloudinary(req.file);
    console.log('POST /news - Cloudinary upload result:', result);

    const news = new News({
      title: req.body.title,
      description: req.body.description,
      image: result.secure_url, // Use secure_url for HTTPS
      publicId: result.public_id, // Use public_id from Cloudinary response
      category: req.body.category,
    });

    const saved = await news.save();
    console.log('POST /news - News saved with image:', saved.image);
    res.status(201).json(saved);
  } catch (err) {
    console.error('POST /news - Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', auth, upload.single('image'), handleMulterError, async (req, res) => {
  console.log('PUT /news/:id - Request body:', req.body);
  console.log('PUT /news/:id - File received:', req.file);
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    news.title = req.body.title || news.title;
    news.description = req.body.description || news.description;
    if (req.file) {
      if (news.publicId) {
        try {
          await cloudinary.uploader.destroy(news.publicId);
          console.log('PUT /news/:id - Deleted old image from Cloudinary:', news.publicId);
        } catch (err) {
          console.error('PUT /news/:id - Failed to delete old image from Cloudinary:', err.message);
        }
      }
      const result = await uploadToCloudinary(req.file);
      news.image = result.secure_url;
      news.publicId = result.public_id;
    }
    news.category = req.body.category || news.category;

    const updatedNews = await news.save();
    console.log('PUT /news/:id - News updated with image:', updatedNews.image);
    res.json(updatedNews);
  } catch (err) {
    console.error('PUT /news/:id - Error:', err.message);
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    if (news.publicId) {
      try {
        await cloudinary.uploader.destroy(news.publicId);
        console.log('DELETE /news/:id - Image deleted from Cloudinary:', news.publicId);
      } catch (err) {
        console.error('DELETE /news/:id - Failed to delete image from Cloudinary:', err.message);
      }
    }

    await news.deleteOne();
    res.json({ message: 'News deleted' });
  } catch (err) {
    console.error('DELETE /news/:id - Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;