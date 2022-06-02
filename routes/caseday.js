const express = require('express');
const router = express.Router();
const { createcaseday ,caseday } = require('../controllers/caseday.js');

router.get ('/:id', caseday);
router.post ('/createcd', createcaseday);

module.exports = router;