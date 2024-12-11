// const User = require('../models/user');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // User registration
// const registerUser = async (req, res) => {
//   const { name, email, password, role } = req.body;
  
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already in use' });
//     }

//     const newUser = new User({ name, email, password, role });
//     await newUser.save();

//     // Generate token
//     const token = newUser.generateAuthToken();

//     res.status(201).json({ message: 'User registered successfully', token });
//   } catch (err) {
//     res.status(400).json({ error: 'Error registering user' });
//   }
// };

// // User login
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid credentials' });
//     }

//     // Generate token
//     const token = user.generateAuthToken();

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (err) {
//     res.status(400).json({ error: 'Error logging in' });
//   }
// };

// // Protect routes (middleware to verify JWT token)
// const protect = (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) {
//     return res.status(403).json({ error: 'Access denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(400).json({ error: 'Invalid token' });
//   }
// };

// // Fetch user by ID
// const getUser = async (req, res) => {
//   const userId = req.user._id;
  
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).json({ error: 'Error fetching user' });
//   }
// };

// module.exports = { registerUser, loginUser, protect, getUser };



// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
// require("dotenv").config();
// const bcrypt = require("bcrypt");

// const login = async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       // Check if the user exists
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(404).json({ message: 'User not found. Please register.' });
//       }
  
//       // Compare the provided password with the stored hashed password
//       if (!(await user.matchPassword(password))) {
//         return res.status(400).json({ message: 'Invalid email or password' });
//       }
  
//       // Proceed with generating JWT or returning user data
//       res.json({
//         message: 'Login successful',
//         user: { email: user.email }, // Adjust response as needed
//       });
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
// }  



// const login = async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       const user = await User.findOne({ email });
//       if (!user || !(await user.matchPassword(password))) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }
  
//       const token = jwt.sign(
//         { id: user._id, role: user.role },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" }
//       );
  
//       res.json({ token, role: user.role });
//     } catch (err) {
//       res.status(500).json({ message: "Server error" });
//     }
//   };

const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const bcrypt = require("bcrypt");

const login= async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token (optional, for session management)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    // Send user data and token
    res.status(200).json({
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
// require("dotenv").config();
// const bcrypt = require("bcrypt");

// const login= async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Check if the password is correct
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//      // Create JWT payload - you can add any other user info here
//      const payload = {
//       id: user._id, // User ID from the database
//       role: user.role, // User role (e.g., Admin, Shelter, Adopter)
//       email: user.email // You can include other details if needed
//     };

//      // Generate JWT token with the payload, secret key, and expiry time
//      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })
    
//     // Send user data and token
//     res.status(200).json({
      
//       token,
//     });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };







const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error registering user.", error });
  }
};


// const register = async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       const userExists = await User.findOne({ email });
//       if (userExists) {
//         return res.status(400).json({ message: 'User already exists' });
//       }
  
//       // Hash the password before saving
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
  
//       const user = new User({
//         email,
//         password: hashedPassword, // Save the hashed password
//       });
  
//       await user.save();
//       res.status(201).json({ message: 'User created' });
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
//   };




module.exports = { login, register };
