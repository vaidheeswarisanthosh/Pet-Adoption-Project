// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  adoptionRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'AdoptionRequest' },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);
