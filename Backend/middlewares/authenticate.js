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




// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
// require("dotenv").config();

// const authenticate = (req, res, next) => {
//   console.log("Authentication middleware called");
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ message: "Authentication token is missing." });
//   }

//   try {
//     console.log("Received token:", token);
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("Decoded token:", decoded);
//     req.user = decoded; // Attach decoded user info to req.user
//     console.log("Authenticated user:", req.user);

//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid or expired token." });
//   }
// };


// module.exports = { authenticate };



const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

// const authenticate = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   console.log("Received token:", token);
//   if (!token) {
//     return res.status(401).json({ message: "Authentication token is missing." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findById(decoded.id);

//     req.user = decoded;
//     console.log("Authenticated user:", req.user);
//     // if (!user) {
//     //   return res.status(401).json({ message: "User not found." });
//     // }

//     // req.user = { id: user._id, role: user.role };
//     // next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid or expired token." });
//   }
// };




const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("Received token:", token);  // Debug log

  if (!token) {
    return res.status(401).json({ message: "Authentication token is missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);  // Debug log

    // Find the user by decoded ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    // Attach the user object to the request
    req.user = user;
    console.log("Authenticated user:", req.user);  // Debug log

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error during authentication:", error);  // Debug log
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};




const protect = async (req, res, next) => {
  let token;

  // Check if Authorization header is present and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract the token
      token = req.headers.authorization.split(' ')[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user details and attach to the request
      req.user = await User.findById(decoded.id).select('-password'); // Exclude password for security

      next(); // Proceed to the next middleware or controller
    } catch (error) {
      console.error('Error with token verification:', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};


module.exports = { authenticate,protect };
