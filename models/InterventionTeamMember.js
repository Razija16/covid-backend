const Sequelize = require('sequelize');

// InterventionTeamMember model

module.exports = (sequelize) =>
sequelize.define('inteverntionteammember', 
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      interventionteamId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'InterventionTeam',
            key: 'id', 
         }
      },
    },
    {
      tableName: 'InterventionTeamMember',
      createdAt: false,
      updatedAt: false
    }
  )
  