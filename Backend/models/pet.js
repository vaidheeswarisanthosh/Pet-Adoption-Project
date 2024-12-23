const mongoose = require('mongoose');
const User = require('./user');
const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  size: { type: String, enum: ['Small', 'Medium', 'Large'], required: true },
  color: { type: String, required: true },
  medicalHistory: { type: String },
  photos: { type: [String] },
  videos: { type: [String] },
  status: { type: String, enum: ['Available', 'Fostered', 'Adopted'], default: 'Available' },
  shelterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // Make it required for every pet to have a shelter
  },
});

module.exports = mongoose.model('Pet', petSchema);