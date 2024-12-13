
const mongoose = require('mongoose');

const adoptionRequestSchema = new mongoose.Schema({
  adopter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shelter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  reasonForAdoption: { type: String, required: true },
  additionalInfoRequest: { type: String }, // Optional: store request for additional info
 
  status: { type: String, enum: ['pending', 'approved', 'rejected','Meet Scheduled'], default: 'pending' },
  messages: [
    {
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      content: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  scheduledMeet: {
    date: Date,
    location: String,
  },
 }, { timestamps: true });

module.exports = mongoose.model('AdoptionRequest', adoptionRequestSchema);
