const Sequelize = require('sequelize');

// InterventionTeam model

module.exports = (sequelize) =>
sequelize.define('interventionteam', 
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      alert_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'InterventionTeam',
      createdAt: false,
      updatedAt: false
    }
  )
 