const express = require('express');
const router = express.Router();
const { patients, patient } = require("../controllers/admin/patients.js");
const { teams, team, createteam, addmember, deletemember, deleteteam } = require("../controllers/admin/team.js");
const { interventions, intervention, handleintervention ,deleteintervention } = require("../controllers/admin/interventions.js");

router.get('/patients', patients);
router.get('/patient/:id', patient);

router.get('/teams', teams);
router.get('/team/:id', team);
router.delete('/deleteteam/:id', deleteteam);

router.post('/createteam', createteam);
router.post('/addmember', addmember);
router.delete('/deletemember/:id', deletemember);

router.get('/interventions/:handled', interventions);
router.get('/intervention/:id/:userId', intervention);
router.post ('/intervention/assign', handleintervention);
router.delete('/deleteintervention/:id', deleteintervention);

module.exports = router;