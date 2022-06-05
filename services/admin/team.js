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

    static async getOneTeam(id){
        return InterventionTeam.findOne({
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
}

module.exports = TeamService;