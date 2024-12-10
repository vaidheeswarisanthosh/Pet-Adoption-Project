const Shelter = require('../models/shelter');

exports.createShelter = async (req, res) => {
  try {
    const { name, location, contact ,description} = req.body;
    
    // Create a new shelter instance
    const shelter = new Shelter({
      name,
      location,
      contact,
      description
    });

    // Save the shelter to the database
    await shelter.save();

    res.status(201).json({ message: 'Shelter created successfully!', shelter });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
