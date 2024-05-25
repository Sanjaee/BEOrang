const multer = require("multer");
const fs = require('fs');
const path = require('path');


const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up multer storage configuration with custom filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    // Generate a unique filename based on the original filename
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    // Accept images only
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  }
});

// Middleware to handle the upload
const uploadImages = upload.array("images", 3); // Accept up to 3 images

// Middleware to check if exactly 3 images are uploaded
const validateImagesUpload = (req, res, next) => {
  if (!req.files || req.files.length !== 3) {
    return res.status(400).json({ error: "You must upload exactly 3 images." });
  }
  next();
};

module.exports = { uploadImages, validateImagesUpload };
