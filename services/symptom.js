const req = require('express/lib/request');
const { where } = require('sequelize');
const Sequelize = require ('sequelize');
const { Op } = Sequelize;
const { PossibleSymptom, CaseDaySymptoms} = require ('../config/db');

class SymptomService {
    static async getSymptoms(casedayId){
        return PossibleSymptom.findAll({
            attributes: ['name'],
            include: {
                model: CaseDaySymptoms,
                required: true,
                attributes: [],
                where: {
                    casedayId
                }

            }
        }).catch((err) => {
            throw err || 'Error getting interventions!';
        });
    }

    static async getFormSymptoms(id){
        return PossibleSymptom.findAll({
            attributes: ['name','id'],
            where: { alert_type: id }
        }).catch((err) => {
            throw err || 'Error getting interventions!';
        });
    }

    static async insertSymptoms(casedayId,array){
        array.forEach((element) => {
            return CaseDaySymptoms.create({
                casedayId: casedayId,
                possiblesymptomId: element
            }).catch((err) => {
                throw err || 'Error setting symptom!';
            });
        })
    }

    static async setSymptoms(array){
        array.forEach((element) => {
            return PossibleSymptom.create({
                name: element.name,
                alert_type: element.alert_type
            }).catch((err) => {
                throw err || 'Error setting symptom!';
            });
        })
    }

}

module.exports = SymptomService;