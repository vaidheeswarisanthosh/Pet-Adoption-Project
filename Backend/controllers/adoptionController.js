const Application = require('../models/adoptionRequest');


exports.submitAdoptionRequest = async (req, res) => {
  const { petId, reasonForAdoption, message } = req.body;

  try {
    const application = new Application({
      adopterId: req.user.id, // Extracted from the JWT token
      petId,
      reasonForAdoption,
      message,
      
      
    });

    await application.save();

    res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit application.' });
  }
};


