const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authenticate');
const adoptionController = require('../controllers/adoptionController');

// Adoption Requests
router.post('/adoption/apply', authenticate, adoptionController.submitAdoptionRequest);
// router.get('/adoption/requests', authenticate, adoptionController.getAdoptionRequests);
// router.patch('/adoption/update', authenticate, adoptionController.updateAdoptionRequest);

// // Messages
// router.post('/adoption/message', authenticate, adoptionController.sendMessage);
// router.get('/adoption/messages/:adoptionRequestId', authenticate, adoptionController.getMessages);

module.exports = router;
