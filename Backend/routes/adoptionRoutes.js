// routes/adoptionRoutes.js
const express = require('express');
const router = express.Router();
const { submitAdoptionRequest, getAdoptionRequests, sendMessage, getMessages } = require('../controllers/adoptionController');
const { authenticate } = require('../middlewares/authenticate');

// Submit adoption application
router.post('/apply', authenticate, submitAdoptionRequest);

// View adoption applications (for shelters)
router.get('/applications', authenticate, getAdoptionRequests);

// Send message (for adopter/shelter communication)
router.post('/message', authenticate, sendMessage);

// Get messages for a specific adoption request
router.get('/messages/:adoptionRequestId', authenticate, getMessages);

module.exports = router;
