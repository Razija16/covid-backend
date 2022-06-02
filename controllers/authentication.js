require('dotenv').config()
const db = require("../config/db");
const User = db.User;
const AuthService = require("../services/auth");
const UserService = require("../services/user");
const CaseService = require("../services/case");

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  let user = req.body;

  if (user.email == "" || user.email == null) {
    
    res.status(404).send('Email can not be empty!').end();
    return;
  }
  
  try {
    
    const newUser = await UserService.addUser(user);
    const newCase = await CaseService.createCase(newUser.id);
    
    res.status(201).send(newUser);
  } catch (e) {
    res.status(500).send({ message: e.message }).end();
  }
}

const login = async (req, res) => {

  const { email, password } = req.body;
  try {
    const token = await AuthService.loginUsers(email, password);
    console.log(token)
    res.status(200).json(token)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({msg:err.message})
  }
};

module.exports = {
  signup,
  login
}