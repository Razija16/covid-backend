const Sequelize = require('sequelize');

// Intervention model

module.exports = (sequelize) =>
sequelize.define('intervention', 
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.STRING,
        defaultValue: Date.now()
      },
      alert_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      interventionteamId: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: true,
      },
      handled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      report: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      casedayId:{
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      }
    },
    {
      tableName: 'Intervention',
      updatedAt: false
    }
  )
  