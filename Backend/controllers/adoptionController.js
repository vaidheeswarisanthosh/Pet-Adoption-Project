// controllers/adoptionController.js
const AdoptionRequest = require('../models/adoptionRequest');
const Message = require('../models/message');
const Pet = require('../models/pet');

// Submit Adoption Application
const submitAdoptionRequest = async (req, res) => {
  try {
    const { petId, shelterId } = req.body; // Assuming petId and shelterId are sent in the request body
    const adopterId = req.user._id;

    const pet = await Pet.findById(petId);
    if (!pet || pet.status !== 'available') {
      return res.status(400).json({ message: 'This pet is not available for adoption.' });
    }

    const adoptionRequest = new AdoptionRequest({
      pet: petId,
      adopter: adopterId,
      shelter: shelterId,
    });

    await adoptionRequest.save();
    res.status(201).json({ message: 'Adoption application submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// View Adoption Applications for Shelters
const getAdoptionRequests = async (req, res) => {
  try {
    const shelterId = req.user._id; // Assuming the shelter's ID is in the user token
    const adoptionRequests = await AdoptionRequest.find({ shelter: shelterId })
      .populate('adopter pet')
      .exec();

    res.status(200).json({ adoptionRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Send Message between Adopter and Shelter
const sendMessage = async (req, res) => {
  try {
    const { adoptionRequestId, content } = req.body;
    const senderId = req.user._id;
    const adoptionRequest = await AdoptionRequest.findById(adoptionRequestId);

    if (!adoptionRequest) {
      return res.status(400).json({ message: 'Adoption request not found.' });
    }

    const recipientId = adoptionRequest.shelter.toString() === senderId.toString()
      ? adoptionRequest.adopter
      : adoptionRequest.shelter;

    const message = new Message({
      adoptionRequest: adoptionRequestId,
      sender: senderId,
      recipient: recipientId,
      content,
    });

    await message.save();
    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get Messages for a Specific Adoption Request
const getMessages = async (req, res) => {
  try {
    const { adoptionRequestId } = req.params;
    const messages = await Message.find({ adoptionRequest: adoptionRequestId })
      .populate('sender recipient')
      .exec();

    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = {
  submitAdoptionRequest,
  getAdoptionRequests,
  sendMessage,
  getMessages,
};
