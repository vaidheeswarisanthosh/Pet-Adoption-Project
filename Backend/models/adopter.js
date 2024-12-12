const mongoose = require("mongoose");

const adopterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  // Additional adopter-specific fields
});

module.exports = mongoose.model("Adopter", adopterSchema);
