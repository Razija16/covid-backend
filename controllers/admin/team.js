const TeamService = require("../../services/admin/team");

const teams = async (req, res) => {
    try {
        const Teams = await TeamService.getTeams();
        res.status(201).send(Teams);
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}

const team = async (req, res) => {
    try {
        const Team = await TeamService.getOneTeam(req.params.id)
        res.status(201).send(Team);
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}
const createteam = async (req, res) => {
    try {
        const CreateTeam = await TeamService.createTeam(req.body);
        res.status(201).send(CreateTeam);
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}

const addmember = async (req, res) => {
    try {
        const TeamMember = await TeamService.addMember(req.body);
        res.status(201).send(TeamMember);
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}
const deletemember = async (req, res) => {
    try {
        const TeamMember = await TeamService.removeMember(req.params.id);
        res.status(200).json({ msg: "Member deleted" })
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}
const deleteteam = async (req, res) => {
    try {
        const Team = await TeamService.removeTeam(req.params.id);
        res.status(201).json({ msg: "Team deleted" })
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}
const assignteams = async (req, res) => {
    try {
        const AssignTeams = await TeamService.getTeamsForAssign();
        res.status(201).send(AssignTeams);
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}
module.exports = {
    teams,
    team,
    createteam,
    addmember,
    assignteams,
    deletemember,
    deleteteam
}