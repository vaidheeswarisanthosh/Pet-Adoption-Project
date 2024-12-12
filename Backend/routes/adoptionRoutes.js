const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authenticate');
const {submitAdoptionRequest}= require('../controllers/adoptionController');

// Adoption Requests
router.post('/adoption/apply', protect, submitAdoptionRequest);
// router.get('/adoption/requests', authenticate, adoptionController.getAdoptionRequests);
// router.patch('/adoption/update', authenticate, adoptionController.updateAdoptionRequest);

// // Messages
// router.post('/adoption/message', authenticate, adoptionController.sendMessage);
// router.get('/adoption/messages/:adoptionRequestId', authenticate, adoptionController.getMessages);

module.exports = router;
