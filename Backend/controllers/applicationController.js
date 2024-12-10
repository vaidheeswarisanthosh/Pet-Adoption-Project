const Application = require('../models/application');

// Create a new application
exports.createApplication=async(req,res)=>{

  try {
    const { petName, petId, adopterName, adopterEmail, message } = req.body;
    const newApplication = new Application({
      petName,
      petId,
      adopterName,
      adopterEmail,
      message,
    });

    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error submitting application' });
  }
}

// Get all applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('petId', 'name') // Replace 'name' with fields from the Pet model
      .populate('applicantId', 'name email'); // Replace 'name email' with fields from the User model

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error });
  }
};

// Update application status
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['Pending', 'Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error updating application', error });
  }
};
