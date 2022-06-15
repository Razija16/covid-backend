const express = require('express');
const router = express.Router();
const { auth, userData } = require ('../middleware/auth');
const { profile,symptoms } = require('../controllers/profile.js');

// router for profile
router.get ('/forms', symptoms);
router.get ('/:id', profile);
router.get ('/test', userData)


module.exports = router;