const express = require('express');
const router = express.Router();
const { teams, team } = require("../controllers/admin/team.js");

router.get('/teams', teams);
router.get('/team/:id', team);

module.exports = router;