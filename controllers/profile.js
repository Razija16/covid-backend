const db = require("../config/db");
const CaseDayService = require ("../services/caseday");
const UserService = require('../services/user');
const CaseService = require('../services/case');

const profile = async(req, res) => {
    try {
        const IsolationDays = await UserService.getIsolationDays(req.params.id); 
        const Case = await CaseService.findUserCase(req.params.id);
        const CaseDays = await CaseDayService.getUserCaseDays(req.params.id);

        const obj = {
          IsolationDays,
          Case,
          CaseDays
        }
        res.status(201).send(obj);
      } catch (e) {
        res.status(500).send({ message: e.message }).end();
      }
}

module.exports = {
    profile
  }