const Sequelize = require('sequelize');

// CaseDay model

module.exports = (sequelize) => 
  sequelize.define(
    'caseday',
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
      caseId: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      alert_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      temperature: {
        allowNull: false,
        type: Sequelize.FLOAT,  
      },
    },{
      tableName: 'CaseDay',
      updatedAt: false
    }
  )