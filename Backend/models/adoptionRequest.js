// // models/AdoptionRequest.js
// const mongoose = require('mongoose');

// const adoptionRequestSchema = new mongoose.Schema({
//   pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
//   adopter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   shelter: { type: mongoose.Schema.Types.ObjectId, ref: 'Shelter' },
//   status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
//   meetAndGreetScheduled: { type: Boolean, default: false },
//   additionalInfoRequested: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('AdoptionRequest', adoptionRequestSchema);
const mongoose = require('mongoose');

const adoptionRequestSchema = new mongoose.Schema({
  adopter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shelter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  meetAndGreetDate: { type: Date }, // Scheduled meet-and-greet date
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdoptionRequest', adoptionRequestSchema);