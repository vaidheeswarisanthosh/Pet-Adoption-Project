const Application = require('../models/adoptionRequest');


exports.submitAdoptionRequest = async (req, res) => {
  try {
    const { petId, shelterId ,reasonForAdoption} = req.body;
    if (!petId || !shelterId || !reasonForAdoption) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const application = new Application({
      adopter: req.user.id, // Extracted from the JWT token
      pet: petId,
      shelter: shelterId,
      reasonForAdoption,
      
      
      });

    await application.save();
    res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit application.' });
  }
};


exports.getApplicationsForShelter = async (req, res) => {
  try {
    console.log('Fetching applications for shelter with ID:', req.user.id);
    const applications = await Application.find({ shelter: req.user.id })
   
      .populate('adopter pet') // Populate adopter and pet data
      .exec();
    res.status(200).json(applications);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ error: 'Error fetching applications.' });
  }
};


// controllers/applicationController.js

exports.updateApplicationStatus = async (req, res) => {
  const { applicationId } = req.params;
  const { status } = req.body; // 'approved' or 'rejected'

  try {
    const application = await Application.findById(applicationId);
    
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Update the status of the application
    application.status = status;
    await application.save();
    res.status(200).json({ message: `Application ${status}` });
  } catch (err) {
    res.status(500).json({ error: 'Error updating application status.' });
  }
};


// controllers/applicationController.js

exports.requestMoreInfo = async (req, res) => {
  const { applicationId } = req.params;
  const { message } = req.body; // The message to request more information

  try {
    const application = await Application.findById(applicationId).populate('adopter');
    
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Logic to send an email or notification to the adopter could go here.
    // For now, we simulate this:
    console.log(`Sending message to adopter: ${message}`);

    res.status(200).json({ message: 'Request for more information sent to the adopter.' });
  } catch (err) {
    res.status(500).json({ error: 'Error requesting more information.' });
  }
};


// controllers/applicationController.js

exports.scheduleMeet = async (req, res) => {
  const { applicationId } = req.params;
  const { date, time } = req.body; // Date and time for meet-and-greet

  try {
    const application = await Application.findById(applicationId);
    
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Logic for scheduling the meet (e.g., store in the database or send an email)
    console.log(`Scheduling meet-and-greet on ${date} at ${time}`);
    
    res.status(200).json({ message: 'Meet-and-greet scheduled.' });
  } catch (err) {
    res.status(500).json({ error: 'Error scheduling meet-and-greet.' });
  }
};
