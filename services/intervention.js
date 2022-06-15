const req = require('express/lib/request');
const { where } = require('sequelize');
const Sequelize = require ('sequelize');
const { Op } = Sequelize;
const { Intervention, InterventionTeam, User } = require ('../config/db');

class InterventionService{

    static async createIntervention(body, casedayId){
        return Intervention.create({
            alert_type: body.alert_type,
            userId: body.user_id,
            casedayId: casedayId
        }).catch((err) => {
            throw err || 'Error setting intervention!';
        });
    }

    static async getUserInterventions(userId){
        return Intervention.findAll({
            attributes: ['id','createdAt','casedayId','handled'],
            where : { userId },
            include:{
                model: User,
                required: true,
                attributes: [],
                where: {
                    userId : userId
                }
            },
            include:
                {
                    model: InterventionTeam,
                    required: false,
                    attributes: ['name']
                },
        
        }).catch((err) => {
            throw err || 'Error getting interventions!';
        });
    }

    static async getIntervention(id){
        return Intervention.findOne({
            attributes: ['createdAt','alert_type','report','handled'],
            where: {
                id
            },
            include:
                {
                    model: InterventionTeam,
                    required: false,
                    attributes: ['name']
                },
            
        }).catch((err) => {
            throw err || 'Error getting intervention!';
        });
    }

}

module.exports = InterventionService;