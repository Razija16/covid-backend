const express = require('express');
const router = express.Router();
const { profile,symptoms } = require('../controllers/profile.js');

// router for profile
router.get ('/forms', symptoms);
router.get ('/:id', profile);


module.exports = router;