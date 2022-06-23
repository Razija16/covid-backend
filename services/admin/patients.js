const req = require('express/lib/request');
const { where } = require('sequelize');
const Sequelize = require ('sequelize');
const { Op } = Sequelize;
const { User } = require ('../../config/db');

class PatientService {

    static async getPatients(){
        return User.findAll({
            attributes: ['id','first_name', 'last_name','is_admin'],
            // where : {
            //     is_admin: false
            // }
        }).catch((err) => {
            throw err || 'Error getting patients!';
        });
    }

    static async getOnePatient(id){
        return User.findOne({
            attributes: ['id', 'first_name', 'last_name','email','createdAt','is_admin'],
            where : {
                id: id
            }
        }).catch((err) => {
            throw err || 'Error getting patient!';
        });
    }

    static async deletePatient(id){
        return User.destroy({
            where: { id: id }
        }).catch((err) => {
            throw err || 'Error deleting patient!';
        });
    }
}

module.exports = PatientService;