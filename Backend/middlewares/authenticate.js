// const jwt = require("jsonwebtoken");

// const authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "No token provided." });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(403).json({ message: "Invalid token." });
//   }
// };

// module.exports = authenticate;



// middlewares/authenticate.js
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

// const authenticate = async (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.userId);
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };




const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const authenticate = (req, res, next) => {
  console.log("Authentication middleware called");
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentication token is missing." });
  }

  try {
    console.log("Received token:", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    req.user = decoded; // Attach decoded user info to req.user
    console.log("Authenticated user:", req.user);

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};


module.exports = { authenticate };

