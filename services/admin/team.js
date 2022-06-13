const req = require('express/lib/request');
const { where } = require('sequelize');
const Sequelize = require ('sequelize');
const { Op } = Sequelize;
const { InterventionTeam, InterventionTeamMember } = require ('../../config/db');

class TeamService {

    static async getTeams(){
        return InterventionTeam.findAll({
            attributes: ['id','name','alert_type']
        }).catch((err) => {
            throw err || 'Error getting teams!';
        });
    }

    static async getTeamsForAssign(){
        return InterventionTeam.findAll({
            attributes: ['id','name','alert_type']
        }).catch((err) => {
            throw err || 'Error getting teams!';
        });
    }

    static async getOneTeam(id){
        return InterventionTeam.findOne({
            where:{
                id:id
            },
            include: {
                model: InterventionTeamMember,
                required: false,
                attributes: ['id','first_name', 'last_name'],
                where: {
                    interventionteamId: id
                }

            }
        }).catch((err) => {
            throw err || 'Error getting team!';
        });
    }

    static async createTeam(body){
        return InterventionTeam.create({
            alert_type: body.alert_type,
            name: body.name
        }).catch((err) => {
            throw err || 'Error creating team!';
        });
    }

    static async addMember(body){
        return InterventionTeamMember.create({
            first_name: body.first_name,
            last_name: body.last_name,
            interventionteamId: body.interventionteamId
        }).catch((err) => {
            throw err || 'Error getting member!';
        });
    }

    static async removeTeam(id){
        return InterventionTeam.destroy({
            where: { id: id }
        }).catch((err) => {
            throw err || 'Error deleting team!';
        });
    }

    static async removeMember(id){
        return InterventionTeamMember.destroy({
            where: { id: id }
        }).catch((err) => {
            throw err || 'Error deleting member!';
        });
    }
}

module.exports = TeamService;