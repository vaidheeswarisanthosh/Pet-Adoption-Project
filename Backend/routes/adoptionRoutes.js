const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authenticate');
const {submitAdoptionRequest,getApplicationsForShelter,updateApplicationStatus}= require('../controllers/adoptionController');

// Adoption Requests
router.post('/adoption/apply', protect, submitAdoptionRequest);
// router.get('/shelter-applications', getApplicationsForShelter);
// router.post('/message/:id', sendMessage);
// router.put('/schedule/:id', scheduleMeet);

// router.get('/shelter-applications/:shelter',getApplicationsForShelter);

// router.put('/application/review/:applicationId', protect, updateApplicationStatus);

module.exports = router;
