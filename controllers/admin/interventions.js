const InterventionService = require("../../services/admin/interventions");

const interventions = async(req, res) => {
    try{
        const Interventions = await InterventionService.getInterventions(req.params.handled);
        res.status(201).send(Interventions);
    } catch (e) {
    res.status(500).send({ message: e.message }).end();
    }
}

const intervention = async(req, res) => {
    try{
        const Intervention = await InterventionService.getIntervention(req.params.id, req.params.userId);
        res.status(201).send(Intervention);
    } catch (e) {
    res.status(500).send({ message: e.message }).end();
    }
}

module.exports = {
    interventions,
    intervention,
}