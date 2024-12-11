const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String },
  email: { type: String, required: true },
  // Add any other relevant fields
});

const Shelter = mongoose.model('Shelter', shelterSchema);

module.exports = Shelter;
