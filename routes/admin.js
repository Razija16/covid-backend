const express = require('express');
const router = express.Router();
const { patients, patient } = require("../controllers/admin/patients.js");
const { teams, team, createteam, addmember } = require("../controllers/admin/team.js");

router.get('/patients', patients);
router.get('/patient/:id', patient);

router.get('/teams', teams);
router.get('/team/:id', team);
router.post('/createteam', createteam);
router.post('/addmember', addmember);

module.exports = router;