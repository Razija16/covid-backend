const db = require("../config/db");
const CaseDayService = require("../services/caseday");
const UserService = require('../services/user');
const CaseService = require('../services/case');
const InterventionService = require("../services/intervention");
const SymptomService = require("../services/symptom");

const profile = async (req, res) => {
  try {
    const IsolationDays = await UserService.getIsolationDays(req.params.id);
    const Case = await CaseService.findUserCase(req.params.id);
    const CaseDays = await CaseDayService.getUserCaseDays(req.params.id);
    const Interventions = await InterventionService.getUserInterventions(req.params.id);

    const obj = {
      IsolationDays,
      Case,
      CaseDays,
      Interventions
    }
    res.status(201).send(obj);
  } catch (e) {
    res.status(500).send({ message: e.message }).end();
  }
}
const symptoms = async (req, res) => {
  try {
    const HighRisk = await SymptomService.getFormSymptoms(1);
    const MediumRisk = await SymptomService.getFormSymptoms(2);
    const LowRisk = await SymptomService.getFormSymptoms(3);
    const obj = {
      HighRisk,
      MediumRisk,
      LowRisk
    }
    res.status(201).send(obj);
  } catch (e) {
    res.status(500).send({ message: e.message }).end();
  }
}
module.exports = {
  profile,
  symptoms
}