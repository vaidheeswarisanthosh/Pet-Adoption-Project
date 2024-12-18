const express = require('express');
const multer = require('multer');


const {authenticate}= require("../middlewares/authenticate");

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

router.post('/pets',authenticate, upload.fields([{ name: 'photos' }, { name: 'videos' }]), addPet);






router.get('/pets', getPets);
router.get('/:id', getPetById);
router.put('/:id',authenticate, updatePet);
router.delete('/:id',authenticate, deletePet);
// router.get('/pets', getFilterPets);

module.exports = router;
