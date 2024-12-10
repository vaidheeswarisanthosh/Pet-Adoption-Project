const express = require('express');
const multer = require('multer');
// const {authenticate }= require("../middlewares/authenticate");
const {
  addPet,
  getPets,
  getPetById,
  updatePet,
  deletePet,
} = require('../controllers/petController');

const router = express.Router();

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

// Routes
router.post('/pets', upload.fields([{ name: 'photos' }, { name: 'videos' }]), addPet);
router.get('/', getPets);
router.get('/:id', getPetById);
router.put('/:id', updatePet);
router.delete('/:id', deletePet);

module.exports = router;
