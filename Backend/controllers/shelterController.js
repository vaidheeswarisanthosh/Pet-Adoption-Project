const Shelter = require('../models/Shelter');

// Controller to create a shelter
exports.createShelter = async (req, res) => {
  try {
    const { name, address, contactNumber, email } = req.body;

    // Check if shelter already exists (optional)
    const existingShelter = await Shelter.findOne({ email });
    if (existingShelter) {
      return res.status(400).json({ message: 'Shelter already exists.' });
    }

    // Create the shelter object
    const shelter = new Shelter({
      name,
      address,
      contactNumber,
      email,
    });

    // Save the shelter to the database
    await shelter.save();

    res.status(201).json({ message: 'Shelter created successfully', shelter });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating shelter', error: error.message });
  }
};
