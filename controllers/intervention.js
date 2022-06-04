const db = require("../config/db");
const InterventionService = require ("../services/intervention.js");
const SymptomService = require("../services/symptom");

const createintervention = async (req, res) => {
    try{
        const Intervention = await InterventionService.createIntervention(req.body, req.body.casedayId);
        console.log(req.body);
        res.status(201).send(Intervention);
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
      }
}

const intervention = async(req, res) => {
    try {
        const Intervention = await InterventionService.getIntervention(req.params.id);
        const Symptoms = await SymptomService.getSymptoms(req.params.casedayId);
        const obj = {
          Intervention,
          Symptoms
        }
        res.status(201).send(obj);
      } catch (e) {
        res.status(500).send({ message: e.message }).end();
      }
  }

module.exports = {
    createintervention,
    intervention
}