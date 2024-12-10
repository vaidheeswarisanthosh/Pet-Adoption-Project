const mongoose = require('mongoose');

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
  shelterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shelter', required: false },
});

module.exports = mongoose.model('Pet', petSchema);