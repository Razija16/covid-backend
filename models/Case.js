const Sequelize = require('sequelize');

// Case model

module.exports = (sequelize) => 
  sequelize.define('case',
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
      closedAt: {
        type: Sequelize.STRING,
        defaultValue: Date.now()
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      isolation_days: {
        type: Sequelize.INTEGER,
        defaultValue: 14,
      },
      userId: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
    },
    {
      tableName: 'Case',
      updatedAt: false
    }
  )
 
