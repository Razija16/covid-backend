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

db.User.hasMany(db.Case, { onDelete: 'CASCADE' });
db.Case.belongsTo(db.User, { onDelete: 'CASCADE' });

// Relations CaseDay

db.Case.hasMany(db.CaseDay, { onDelete: 'CASCADE' });
db.CaseDay.belongsTo(db.Case, { onDelete: 'CASCADE' });

// Relations CaseDaySymptoms

db.CaseDay.hasMany(db.CaseDaySymptoms, { onDelete: 'CASCADE' });
db.CaseDaySymptoms.belongsTo(db.CaseDay, { onDelete: 'CASCADE' });

db.PossibleSymptom.hasMany(db.CaseDaySymptoms, { onDelete: 'CASCADE' });
db.CaseDaySymptoms.belongsTo(db.PossibleSymptom, { onDelete: 'CASCADE' });

// Relations Intervention

db.InterventionTeam.hasMany(db.Intervention, { onDelete: 'CASCADE' });
db.Intervention.belongsTo(db.InterventionTeam, { onDelete: 'CASCADE' });

db.InterventionTeam.hasMany(db.Intervention, { onDelete: 'CASCADE' });
db.Intervention.belongsTo(db.InterventionTeam, { onDelete: 'CASCADE' });

db.User.hasMany(db.Intervention, { onDelete: 'CASCADE' });
db.Intervention.belongsTo(db.User, { onDelete: 'CASCADE' });

db.CaseDay.hasMany(db.Intervention, { onDelete: 'CASCADE' });
db.Intervention.belongsTo(db.CaseDay, { onDelete: 'CASCADE' });

// Relations InteventionTeamMember

db.InterventionTeam.hasMany(db.InterventionTeamMember, { onDelete: 'CASCADE' });
db.InterventionTeamMember.belongsTo(db.InterventionTeam, { onDelete: 'CASCADE' });


module.exports = db;
