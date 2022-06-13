const req = require('express/lib/request');
const { where } = require('sequelize');
const Sequelize = require ('sequelize');
const { Op } = Sequelize;
const { Intervention, InterventionTeam, User} = require ('../../config/db');

class InterventionService {
    
    static async getInterventions(handled){
        if (handled == 1) {
            return Intervention.findAll({
                where : { handled: true },
                attributes: ['id', 'alert_type','userId']
            }).catch((err) => {
                throw err || 'Error getting interventions!';
            });
        }
        else if (handled == 0){
            return Intervention.findAll({
                where : { handled: false },
                attributes: ['id', 'alert_type','userId']
            }).catch((err) => {
                throw err || 'Error getting interventions!';
            });
        }
    }
}

module.exports = InterventionService;