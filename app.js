const express = require('express');

const cors = require('cors');
const authRouter = require('./routes/authentication.js');
const profileRouter = require('./routes/profile');
const interventionRouter = require('./routes/intervention');
const casedayRouter = require('./routes/caseday');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());

app.use('/api', authRouter);
app.use('/api/profile', profileRouter);
app.use('/api/caseday', casedayRouter);
app.use('/api/intervention', interventionRouter);



module.exports = app;