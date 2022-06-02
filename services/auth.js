require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../config/db');

// Service connect db and backend api. Service serv data for controller

class AuthService {
  static createToken(loginUser) {
    const user = {
      id: loginUser.id,
      first_name: loginUser.first_name,
      last_name: loginUser.last_name,
      email: loginUser.email,
      is_admin: loginUser.is_admin
    }
    const payload = user;
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return {
      token,
      user
    }
  }

  static async loginUsers(email, password) {
    const user = await User.findOne({ where: { email } });
    console.log(user)
    if (!user) {
      throw new Error("User doesn't exist!");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Password incorrect!');
    }
    return this.createToken(user);
  }
}

module.exports = AuthService;
