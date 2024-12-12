// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser, protect, getUser } = require('../controllers/authController');

// // Register new user
// router.post('/register', registerUser);

// // Login user
// router.post('/login', loginUser);

// // Fetch user data (protected route)
// router.get('/me', protect, getUser);

// module.exports = router;



const express = require("express");
const { login, register, refreshToken } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
// router.post('/refresh-token', refreshToken);

module.exports = router;
