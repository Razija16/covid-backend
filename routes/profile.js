const express = require('express');
const router = express.Router();
const { auth, userData } = require ('../middleware/auth');
const { profile,symptoms } = require('../controllers/profile.js');

// router for profile
router.get ('/forms', symptoms);
router.get ('/test', userData)
router.get ('/:id', profile);


module.exports = router;