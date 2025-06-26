const express = require('express');
const router = express.Router();
const News = require('../models/News');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
const { upload } = require('../middleware/upload');

router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    const newsWithFullUrl = news.map(item => ({
      ...item.toObject(),
      image: item.image ? `${req.protocol}://${req.get('host')}/${item.image}` : null
    }));
    res.json(newsWithFullUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News item not found' });
    }
    // Include full image URL
    const newsWithFullUrl = {
      ...news.toObject(),
      image: news.image ? `${req.protocol}://${req.get('host')}/${news.image}` : null
    };
    res.json(newsWithFullUrl);
  } catch (err) {
    console.error('Error fetching news item:', err.message); // Debug log
    res.status(500).json({ message: err.message });
  }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file uploaded' });
    }

    const news = new News({
      title: req.body.title,
      description: req.body.description,
      image: path.join('uploads', req.file.filename).replace(/\\/g, '/'),
      category: req.body.category,
    });

    const saved = await news.save();
    // Return the saved news item with the full image URL
    const newsWithFullUrl = {
      ...saved.toObject(),
      image: `${req.protocol}://${req.get('host')}/${saved.image}`
    };
    res.status(201).json(newsWithFullUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    news.title = req.body.title || news.title;
    news.description = req.body.description || news.description;
    if (req.file) {
      news.image = path.join('uploads', req.file.filename).replace(/\\/g, '/');
    }
    news.category = req.body.category || news.category;

    const updatedNews = await news.save();
    // Return the updated news item with the full image URL
    const newsWithFullUrl = {
      ...updatedNews.toObject(),
      image: updatedNews.image ? `${req.protocol}://${req.get('host')}/${updatedNews.image}` : null
    };
    res.json(newsWithFullUrl);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    await news.deleteOne();
    res.json({ message: 'News deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;