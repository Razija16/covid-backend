const Sequelize = require('sequelize');

// User model

module.exports = (sequelize) =>
  sequelize.define(
    'user',
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
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          validate: {
            isEmail: true,
          },
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        is_admin: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        createdAt: {
          type: Sequelize.STRING,
          defaultValue: Date.now()
        }
      }, {
        tableName: 'User',
        updatedAt: false
      }
    )