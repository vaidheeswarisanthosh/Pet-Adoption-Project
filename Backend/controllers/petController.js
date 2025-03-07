

const Pet = require("../models/pet");
const Shelter = require("../models/shelter");
const User = require("../models/user");


// Add a new pet with photos and videos

exports.addPet = async (req, res) => {
  try {
    const {name, age, breed, size, color, medicalHistory} = req.body;
    console.log("Received pet data:", req.body);
    const shelterId = req.params.shelterId;
    // Ensure the user is a shelter
    

      // Ensure the user is authenticated and has a shelterId
      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: "Authentication token is missing or invalid." });
      }

       // Ensure the user has the 'shelter' role
    if (req.user.role !== "Shelter" && req.user.role !== "Admin") {
      return res.status(403).json({ message: "Only shelters can add pets." });
    }

    // Handle uploaded files
    // const photos = req.files["photos"]?.map((file) => file.path) || [];
    
    
    // Prepare pet data
    // const petData = {
    //   ...req.body,
    //   // photos,
      
    //   shelterId: req.user.id
     
      
    // };
    
    const petData = {
      name,
      age,
      breed,
      size,
      color,
      medicalHistory,
      // photos: [],
      shelterId: req.user.id,
    };
  
    const pet = new Pet(petData);
    await pet.save();

    res.status(201).json({ message: "Pet added successfully!", pet });
  } catch (error) {
    console.error("Error adding pet:", error);
    res.status(400).json({ error: error.message });
  }
};





// // Get all pets with filters
// exports.getPets = async (req, res) => {
//   const { breed, age, size } = req.query;
//   const filters = {};
//   if (breed) filters.breed = breed;
//   if (age) filters.age = age;
//   if (size) filters.size = size;

//   try {
//     const pets = await Pet.find(filters).populate('shelterId', 'name location');
//     res.json(pets);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

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
// exports.updatePet = async (req, res) => {
//   try {
//     const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedPet) return res.status(404).json({ message: 'Pet not found!' });
//     res.json({ message: 'Pet updated successfully!', updatedPet });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };




exports.updatePet = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedPet = await Pet.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: 'Error updating pet', error });
  }
};

  

// Delete a pet
exports.deletePet = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) return res.status(404).json({ message: 'Pet not found!' });

      // Check if the user is either Admin or Shelter and is authorized to delete the pet
      if (req.user.role !== 'Admin' && req.user.role !== 'Shelter') {
        return res.status(403).json({ message: 'Not authorized' });
      }
  
    res.json({ message: 'Pet deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getPets= async (req, res) => {
  try {
    const { searchTerm, size, sortBy } = req.query;
    
    // Build search query
    const query = {};
    if (searchTerm) {
      query.name = { $regex: searchTerm, $options: 'i' }; // Case-insensitive search
    }
    if (size) {
      query.size = size;
    }
    

    // Sort options
    const sortOptions = {};
    if (sortBy === 'name') sortOptions.name = 1;
    if (sortBy === 'age') sortOptions.age = 1;
    if (sortBy === 'status') sortOptions.status = 1;

    const pets = await Pet.find(query).sort(sortOptions);
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching pets' });
  }
};
