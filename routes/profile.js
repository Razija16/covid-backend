const express = require('express');
const router = express.Router();
const { profile } = require('../controllers/profile.js');

// router for profile

router.get ('/:id', profile);


module.exports = router;