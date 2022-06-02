const Sequelize = require('sequelize');

// PossibleSymptom model

module.exports = (sequelize) =>
sequelize.define('possiblesymptom', 
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      alert_type: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    },
    {
      tableName: 'PossibleSymptom',
      updatedAt: false,
      createdAt: false
    }
  )