const Pet = require('../models/pet');
const Shelter = require('../models/shelter');

// Add a new pet
exports.addPet = async (req, res) => {
    // if (req.user.role !== "shelter") {
    //     return res.status(403).json({ message: "Only shelters can add pets." });
    //   }
      
  try {
    const shelterId = req.params.shelterId; // Get shelterId from route params
    const photos = req.files['photos']?.map((file) => file.path) || [];
    const videos = req.files['videos']?.map((file) => file.path) || [];
    const petData = { ...req.body, photos, videos, shelterId };
    const shelter = await Shelter.findById(shelterId);
    if (!shelter) {
      return res.status(404).json({ message: 'Shelter not found!' });
    }
    const pet = new Pet(petData);
    await pet.save();
    res.status(201).json({ message: 'Pet added successfully!', pet });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all pets with filters
exports.getPets = async (req, res) => {
  const { breed, age, size } = req.query;
  const filters = {};
  if (breed) filters.breed = breed;
  if (age) filters.age = age;
  if (size) filters.size = size;

  try {
    const pets = await Pet.find(filters).populate('shelterId', 'name location');
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single pet by ID
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate('shelterId');
    if (!pet) return res.status(404).json({ message: 'Pet not found!' });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update pet information
exports.updatePet = async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPet) return res.status(404).json({ message: 'Pet not found!' });
    res.json({ message: 'Pet updated successfully!', updatedPet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a pet
exports.deletePet = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) return res.status(404).json({ message: 'Pet not found!' });
    res.json({ message: 'Pet deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
