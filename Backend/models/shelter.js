const mongoose = require("mongoose");

const shelterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  description: String,
});

const Shelter = mongoose.model("Shelter", shelterSchema);

module.exports = Shelter;
