const req = require('express/lib/request');
const { where } = require('sequelize');
const Sequelize = require ('sequelize');
const { Op } = Sequelize;
const { User } = require ('../../config/db');

class PatientService {

    static async getPatients(){
        return User.findAll({
            attributes: ['id','first_name', 'last_name'],
            where : {
                is_admin: false
            }
        }).catch((err) => {
            throw err || 'Error getting patients!';
        });
    }

}

module.exports = PatientService;