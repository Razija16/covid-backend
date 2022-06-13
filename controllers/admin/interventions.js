const InterventionService = require("../../services/admin/interventions.js");

const interventions = async(req, res) => {
    try{
        const Interventions = await InterventionService.getInterventions(req.params.handled);
        res.status(201).send(Interventions);
    } catch (e) {
    res.status(500).send({ message: e.message }).end();
    }
}

module.exports = {
    interventions
}