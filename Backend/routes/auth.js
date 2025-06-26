const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Load environment variables
require('dotenv').config();

// Debug environment variables
console.log('Environment variables loaded:', {
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = process.env.USERNAME;
    const pass = process.env.PASSWORD;

    if (!user || !pass) {
      return res.status(500).json({ message: 'Environment variables not configured properly' });
    }

    let role = 'user';
    if (username === user && password === pass) {
      role = 'admin';
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ username, role }, process.env.JWT_SECRET || 'your_jwt_secret', {
      expiresIn: '24h',
    });

    console.log('Generated token:', token); // Debug token

    res.json({ token });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;