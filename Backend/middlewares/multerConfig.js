const multer = require("multer");
const path = require("path");

// Multer setup for temporary storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Allow only images and videos
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images and videos are allowed."));
  }
};

const upload = multer({ storage, fileFilter });

// Middleware for multiple files
const uploadFiles = upload.fields([
  { name: "photos", maxCount: 5 },
  { name: "videos", maxCount: 2 },
]);

module.exports = uploadFiles;
