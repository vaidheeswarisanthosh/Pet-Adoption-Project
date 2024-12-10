// models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  adopterName: { type: String, required: true },
  adopterEmail: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Approved', 'Rejected'] },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
