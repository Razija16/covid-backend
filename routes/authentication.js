const express = require('express');

const router = express.Router();
const {login,signup} = require('../controllers/authentication.js');

// router for login /

router.post('/login', login);

router.post('/signup',signup);

module.exports = router;
