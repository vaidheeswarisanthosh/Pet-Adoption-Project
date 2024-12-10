exports.submitAdoptionRequest = async (req, res) => {
    try {
      const { petId, shelterId } = req.body;
      const adopterId = req.user.id;
  
      const request = new AdoptionRequest({ adopter: adopterId, shelter: shelterId, pet: petId });
      await request.save();
  
      res.status(201).json({ message: 'Adoption application submitted successfully.', request });
    } catch (error) {
      res.status(500).json({ message: 'Server error.', error: error.message });
    }
  };