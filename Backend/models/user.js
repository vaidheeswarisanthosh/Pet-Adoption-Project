const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing
// const jwt = require('jsonwebtoken'); // For creating JWT tokens

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Adopter', 'Shelter', 'Admin'], required: true,default: "adopter" }, 
  
  createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password for login
// userSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Method to generate JWT token
// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id, role: this.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   return token;
// };

const User = mongoose.model('User', userSchema);
module.exports = User;
