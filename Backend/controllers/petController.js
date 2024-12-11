// const Pet = require('../models/pet');
// const User = require('../models/user');
// const Shelter = require('../models/shelter');

// // Add a new pet
// exports.addPet = async (req, res) => {
//     if (req.user.role !== "shelter") {
//         return res.status(403).json({ message: "Only shelters can add pets." });
//       }
      
//   try {
//     // const shelterId = req.params.shelterId; // Get shelterId from route params
//     const photos = req.files['photos']?.map((file) => file.path) || [];
//     const videos = req.files['videos']?.map((file) => file.path) || [];
//     const petData = { ...req.body, photos, videos,  shelterId: req.user.id };
//     console.log(petData);
//     const shelter = await Shelter.findById(shelterId);
//     if (!shelter) {
//       return res.status(404).json({ message: 'Shelter not found!' });
//     }
//     const pet = new Pet(petData);
//     await pet.save();
//     res.status(201).json({ message: 'Pet added successfully!', pet });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


const Pet = require("../models/pet");
const Shelter = require("../models/Shelter");
const User = require("../models/user");

exports.addPet = async (req, res) => {
  try {
    const shelterId = req.params.shelterId;
    // Ensure the user is a shelter
    // if (req.user.role !== "Shelter") {
    //   return res.status(403).json({ message: "Only shelters can add pets." });
    // }

      // Ensure the user is authenticated and has a shelterId
      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: "Authentication token is missing or invalid." });
      }

       // Ensure the user has the 'shelter' role
    if (req.user.role !== "Shelter") {
      return res.status(403).json({ message: "Only shelters can add pets." });
    }

    // Handle uploaded files
    const photos = req.files["photos"]?.map((file) => file.path) || [];
    const videos = req.files["videos"]?.map((file) => file.path) || [];

    // Prepare pet data
    const petData = {
      ...req.body,
      photos,
      videos,
      shelterId: req.user.id
     
      // shelterId: req.user.id, // Shelter ID from the authenticated user
    };

    // Validate shelter existence
    // const shelter = await Shelter.findById(req.user.id);
    // if (!shelter) {
    //   return res.status(404).json({ message: "Shelter not found!" });
    // }

    // Create and save the pet
    const pet = new Pet(petData);
    await pet.save();

    res.status(201).json({ message: "Pet added successfully!", pet });
  } catch (error) {
    console.error("Error adding pet:", error);
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
