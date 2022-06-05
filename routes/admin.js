const express = require('express');
const router = express.Router();
const { teams, team, createteam, addmember } = require("../controllers/admin/team.js");

router.get('/teams', teams);
router.get('/team/:id', team);
router.post('/createteam', createteam);
router.post('/addmember', addmember);

module.exports = router;