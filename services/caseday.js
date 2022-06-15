const req = require('express/lib/request');
const { where } = require('sequelize');
const Sequelize = require ('sequelize');
const { Op } = Sequelize;
const { CaseDay, Case, User } = require ('../config/db');

class CaseDayService{

    static async createCaseDay(body){
        return CaseDay.create({
            caseId: body.caseId,
            alert_type: body.alert_type,
            temperature: body.temperature
        }).catch((err) => {
            throw err || 'Error setting caseday!';
        });
    }

    static async getUserCaseDays(Id){
        return CaseDay.findAll({
            attributes: ['id','createdAt','alert_type'],
            include: [
                {
                    model: Case,
                    required: true,
                    attributes: [],
                    include: [{
                        model: User,
                        required: true,
                        attributes: [],
                        where: {
                            Id
                        }
                    }]
                }
            ],
        
        }).catch((err) => {
            throw err || 'Error getting casedays!';
        });
    }

    static async getCaseDay(id){
        return CaseDay.findOne({
            where: {
                id
            },
            attributes: ['createdAt','alert_type','temperature']
        }).catch((err) => {
            throw err || 'Error getting caseday!';
        });
    }

    static async setLastFormFill(caseId, date){
        return Case.update({
            lastFormFill: date
        },
        { 
            where: { id: caseId } 
        }
        ).catch((err) => {
            throw err || 'Error updating date for last form filled!';
        });
    }
}

module.exports = CaseDayService