const Sequelize = require('sequelize');
require('dotenv').config()

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

connection.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



// Connection database with models

const db = {};
db.connection = connection;
db.User = require(`../models/User.js`)(connection);
db.Case = require(`../models/Case.js`)(connection);
db.CaseDay = require(`../models/CaseDay.js`)(connection);
db.CaseDaySymptoms = require(`../models/CaseDaySymptoms.js`)(connection);
db.PossibleSymptom = require(`../models/PossibleSymptom.js`)(connection);
db.Intervention = require(`../models/Intervention.js`)(connection);
db.InterventionTeam = require(`../models/InterventionTeam.js`)(connection);
db.InterventionTeamMember = require(`../models/InterventionTeamMember.js`)(connection);


// Relations Case

db.User.hasMany(db.Case);
db.Case.belongsTo(db.User);

// Relations CaseDay

db.Case.hasMany(db.CaseDay);
db.CaseDay.belongsTo(db.Case);

// Relations CaseDaySymptoms

db.CaseDay.hasMany(db.CaseDaySymptoms);
db.CaseDaySymptoms.belongsTo(db.CaseDay);

db.PossibleSymptom.hasMany(db.CaseDaySymptoms);
db.CaseDaySymptoms.belongsTo(db.PossibleSymptom);

// Relations Intervention

db.InterventionTeam.hasMany(db.Intervention);
db.Intervention.belongsTo(db.InterventionTeam);

db.InterventionTeam.hasMany(db.Intervention);
db.Intervention.belongsTo(db.InterventionTeam);

db.User.hasMany(db.Intervention);
db.Intervention.belongsTo(db.User);

db.CaseDay.hasMany(db.Intervention);
db.Intervention.belongsTo(db.CaseDay);

// Relations InteventionTeamMember

db.InterventionTeam.hasMany(db.InterventionTeamMember);
db.InterventionTeamMember.belongsTo(db.InterventionTeam);


module.exports = db;
