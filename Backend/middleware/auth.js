const jwt = require('jsonwebtoken');

const auth = (req, res, next, requiredRole = null) => {
  try {
    // Get token from Authorization header
    const authHeader = req.header('Authorization');
    console.log('Authorization header:', authHeader); // Debug header

    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Ensure header starts with 'Bearer '
    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    // Extract token
    const token = authHeader.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');

    if (requiredRole && decoded.role !== requiredRole) {
      return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.error('Auth middleware error:', err.name, err.message); // Debug error
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired' });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token is not valid' });
    }
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = auth;