const express = require('express');
const router = express.Router();
const { auth, userData } = require ('../middleware/auth');
const { profile, symptoms, defaultSymptoms } = require('../controllers/profile.js');

// router for profile
router.get ('/test', userData)
router.get ('/forms', symptoms);
router.get ('/:id', profile);
router.post ('/symptoms', defaultSymptoms);


module.exports = router;