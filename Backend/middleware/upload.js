const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedExtensions = /jpeg|jpg|png|gif/;
    const fileExtension = path.extname(file.originalname).toLowerCase();
    const fileMimeType = file.mimetype.toLowerCase();
    const isExtensionValid = allowedExtensions.test(fileExtension.replace('.', ''));
    const isMimeTypeValid = /image\/(jpeg|jpg|png|gif)/.test(fileMimeType);
    if (isExtensionValid && isMimeTypeValid) {
      return cb(null, true);
    }
    cb(new Error('Only images with extensions .jpg, .jpeg, .png, or .gif are allowed'));
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

module.exports = { upload };