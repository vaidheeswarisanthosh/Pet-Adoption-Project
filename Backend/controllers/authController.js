

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
      // { expiresIn: '1h' }
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





// // Utility function to generate JWT token
// const generateAccessToken = (user) => {
//   return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
// };

// // Login function (generates access token and refresh token)
// const login = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate tokens
//     const accessToken = generateAccessToken(user);
//     const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });

//     // Optional: Store refresh token in the database (for security reasons)
//     await Token.create({ userId: user._id, refreshToken });

//     // Send refresh token as an HTTP-only cookie
//     res.cookie('refreshToken', refreshToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production', // Set to true in production
//       maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
//     });

//     // Send access token in response
//     res.json({ accessToken });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Token refresh function
// const refreshToken = async (req, res) => {
//   const refreshToken = req.cookies.refreshToken;

//   if (!refreshToken) {
//     return res.status(401).json({ message: 'Refresh token missing' });
//   }

//   try {
//     // Verify the refresh token
//     const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     // Generate new access token
//     const accessToken = generateAccessToken(user);
    
//     // Send new access token
//     res.json({ accessToken });
//   } catch (error) {
//     console.error(error);
//     res.status(403).json({ message: 'Invalid or expired refresh token' });
//   }
// };


module.exports = { login, register };