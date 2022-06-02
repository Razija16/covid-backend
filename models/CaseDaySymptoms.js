const Sequelize = require('sequelize');

// CaseDaySymptoms model

module.exports = (sequelize) =>
 sequelize.define('casedaysymptoms', 
    {
        casedayId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            primaryKey: true
          },
          possiblesymptomId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
          },
    },
    {
      tableName: 'CaseDaySymptoms',
      updatedAt: false,
      createdAt: false
    }
  )
  