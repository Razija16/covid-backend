const express = require('express');
const router = express.Router();
const { createintervention, intervention } = require('../controllers/intervention.js');

router.get ('/:id/:casedayId', intervention);
router.post ('/createintervention', createintervention);

module.exports = router;