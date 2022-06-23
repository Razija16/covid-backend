const db = require("../config/db");
const CaseDayService = require("../services/caseday");
const SymptomService = require("../services/symptom");
const InterventionService = require("../services/intervention");

const createcaseday = async (req, res) => {
  try {
    let now = new Date();
    now = now.getTime();
    now = now.toString();

    const CaseDay = await CaseDayService.createCaseDay(req.body);
    const Symptoms = await SymptomService.insertSymptoms(CaseDay.id, req.body.symptoms);
    const LastForm = await CaseDayService.setLastFormFill(req.body.caseId, now);
    let Intervention = null;
    const obj = {
      CaseDay,
      Symptoms,
      Intervention
    }
    if(CaseDay.alert_type == 1){
      Intervention = await InterventionService.createIntervention(req.body, CaseDay.id);
      obj.Intervention=Intervention
    }
    res.status(201).send(obj);
  } catch (e) {
    res.status(500).send({ message: e.message }).end();
  }
}

const caseday = async (req, res) => {
  try {
    const CaseDay = await CaseDayService.getCaseDay(req.params.id);
    const Symptoms = await SymptomService.getSymptoms(req.params.id);
    const obj = {
      CaseDay,
      Symptoms
    }
    res.status(201).send(obj);
  } catch (e) {
    res.status(500).send({ message: e.message }).end();
  }
}

module.exports = {
  createcaseday,
  caseday
}