const req = require('express/lib/request');
const { where } = require('sequelize');
const Sequelize = require ('sequelize');
const { Op } = Sequelize;
const { Case } = require ('../config/db');

class CaseService {

    static async createCase(Id){
        return Case.create({
            userId: Id
        }).catch((err) => {
            throw err || 'Error creating caseday!';
        });
    }

    static async findUserCase(Id){
        return Case.findOne({
            attributes: ['id'],
            where:{
                userId: Id
            }
        }).catch((err) => {
            throw err || 'Error getting caseday!';
        });
    }

}

module.exports = CaseService;