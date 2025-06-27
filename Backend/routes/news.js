const express = require('express');
const router = express.Router();
const News = require('../models/News');
const auth = require('../middleware/auth');
const { upload } = require('../middleware/upload');
const path = require('path');

router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    const newsWithFullUrl = news.map(item => ({
      ...item.toObject(),
      image: item.image ? `${req.protocol}://${req.get('host')}/${item.image}` : null
    }));
    res.json(newsWithFullUrl);
  } catch (err) {
    console.error('GET /news - Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News item not found' });
    }
    const newsWithFullUrl = {
      ...news.toObject(),
      image: news.image ? `${req.protocol}://${req.get('host')}/${news.image}` : null
    };
    res.json(newsWithFullUrl);
  } catch (err) {
    console.error('GET /news/:id - Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  console.log('POST /news - Request body:', req.body);
  console.log('POST /news - File received:', req.file);
  try {
    if (!req.file) {
      console.log('POST /news - No file uploaded');
      return res.status(400).json({ message: 'No image file uploaded' });
    }

    const news = new News({
      title: req.body.title,
      description: req.body.description,
      image: path.join('Uploads', req.file.filename).replace(/\\/g, '/'),
      category: req.body.category,
    });

    const saved = await news.save();
    const newsWithFullUrl = {
      ...saved.toObject(),
      image: `${req.protocol}://${req.get('host')}/${saved.image}`
    };
    console.log('POST /news - News saved with image:', newsWithFullUrl.image);
    res.status(201).json(newsWithFullUrl);
  } catch (err) {
    console.error('POST /news - Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', auth, upload.single('image'), async (req, res) => {
  console.log('PUT /news/:id - Request body:', req.body);
  console.log('PUT /news/:id - File received:', req.file);
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    news.title = req.body.title || news.title;
    news.description = req.body.description || news.description;
    if (req.file) {
      news.image = path.join('Uploads', req.file.filename).replace(/\\/g, '/');
    }
    news.category = req.body.category || news.category;

    const updatedNews = await news.save();
    const newsWithFullUrl = {
      ...updatedNews.toObject(),
      image: updatedNews.image ? `${req.protocol}://${req.get('host')}/${updatedNews.image}` : null
    };
    console.log('PUT /news/:id - News updated with image:', newsWithFullUrl.image);
    res.json(newsWithFullUrl);
  } catch (err) {
    console.error('PUT /news/:id - Error:', err.message);
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
    console.error('DELETE /news/:id - Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;