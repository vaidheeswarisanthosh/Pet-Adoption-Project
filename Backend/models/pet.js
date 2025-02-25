const mongoose = require('mongoose');
const User = require('./user');
const petSchema = new mongoose.Schema({
  name: { type: String, },
  age: { type: Number, },
  breed: { type: String,  },
  size: { type: String, enum: ['Small', 'Medium', 'Large']  },
  color: { type: String,  },
  medicalHistory: { type: String },
  photos: { type: [String] },
 
  status: { type: String, enum: ['Available', 'Fostered', 'Adopted'], default: 'Available' },
  shelterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // Make it required for every pet to have a shelter
  },
});

module.exports = mongoose.model('Pet', petSchema);