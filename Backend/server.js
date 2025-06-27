const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const newsRoutes = require('./routes/news');
const authRoutes = require('./routes/auth');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Create uploads folder if it doesn't exist
const uploadDir = path.join(__dirname, 'Uploads');
console.log('Server startup - Upload directory path:', uploadDir);
if (!fs.existsSync(uploadDir)) {
  try {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('Server startup - Created uploads directory at:', uploadDir);
  } catch (err) {
    console.error('Server startup - Failed to create uploads directory:', err.message);
  }
}

app.use(cors());
app.use(bodyParser.json());
// Serve static files from uploads folder
app.use('/uploads', express.static(uploadDir, {
  setHeaders: (res, path) => {
    res.set('Content-Type', 'image/jpeg'); // Adjust based on your image types
  },
  fallthrough: true,
}));
app.use('/uploads', (req, res) => {
  console.log('Requested missing file:', req.originalUrl);
  res.status(404).send('Image not found');
});

app.use('/news', newsRoutes);
app.use('/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});