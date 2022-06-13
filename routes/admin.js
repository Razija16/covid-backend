const express = require('express');
const router = express.Router();
const { patients, patient } = require("../controllers/admin/patients.js");
const { teams, team, createteam, addmember, deletemember,deleteteam  } = require("../controllers/admin/team.js");

router.get('/patients', patients);
router.get('/patient/:id', patient);

router.get('/teams', teams);
router.get('/team/:id', team);
router.delete ('/deleteteam/:id', deleteteam);

router.post('/createteam', createteam);
router.post('/addmember', addmember);
router.delete('/deletemember/:id', deletemember);

module.exports = router;