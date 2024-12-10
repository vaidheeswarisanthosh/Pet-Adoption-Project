const express = require('express');
const applicationController = require('../controllers/applicationController');
const router = express.Router();

// Create a new application
router.post('/create', applicationController.createApplication);

// Get all applications
router.get('/', applicationController.getApplications);

// Update application status
// router.patch('/:id', applicationController.updateApplicationStatus);

module.exports = router;
