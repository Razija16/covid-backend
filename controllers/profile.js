const db = require("../config/db");
const CaseDayService = require("../services/caseday");
const InterventionService = require("../services/intervention");
const SymptomService = require("../services/symptom");
const UserService = require('../services/user');
const CaseService = require('../services/case');

const profile = async (req, res) => {
  try {
    const CreatedDate = await UserService.getCreatedAt(req.params.id);
    let created = new Date(Number(CreatedDate.createdAt));
    let now = new Date();
    let difference = now.getTime() - created.getTime();
    let TotalDays = Math.floor(difference / (1000 * 3600 * 24));

    let button = true;
    const FormDate = await UserService.getLastForm(req.params.id);
    if (FormDate.lastFormFill != null) {
      let formdate = new Date(Number(FormDate.lastFormFill));
      let thisdate = new Date();
      var diff = (thisdate.getTime() - formdate.getTime()) / 1000;
      diff /= (60 * 60);
      let hours = Math.abs(Math.round(diff));
      if (hours >= 6) button = true;
      else button = false;
    }

    const UpdateIsolation = await UserService.updateIsolation(req.params.id, TotalDays);

    const IsolationDays = await UserService.getIsolationDays(req.params.id);
    const Case = await CaseService.findUserCase(req.params.id);
    const CaseDays = await CaseDayService.getUserCaseDays(req.params.id);
    const Interventions = await InterventionService.getUserInterventions(req.params.id);

    const obj = {
      IsolationDays,
      button,
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