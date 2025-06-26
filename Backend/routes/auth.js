const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}



router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = process.env.USERNAME;
    const pass = process.env.PASSWORD;
    const secret = process.env.JWT_SECRET || 'your_fallback_secret';

    if (!user || !pass || !secret) {
      return res.status(500).json({ message: 'Server misconfigured (missing .env or env vars)' });
    }

    if (username !== user || password !== pass) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const role = 'admin'; // Since only one user/password, assign admin

    const token = jwt.sign({ username, role }, secret, { expiresIn: '24h' });

    res.json({ token });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
