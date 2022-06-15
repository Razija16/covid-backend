const bcrypt = require('bcryptjs');
const { User, Case } = require('../config/db');

class UserService {
  
  static async addUser(user) {
    
    const usr = await User.findOne({ where: { email: user.email } });
    if (usr) throw Error('User exists!');
    if (user.password.length<6) throw Error('Password too short!');
    else{
    return bcrypt.hash(user.password, 10).then(async (hash) => {
      user.password = hash;
      return User.create(user).catch((err3) => {
        throw err3.message || 'Error creating new user!';
      });
    });
  }
}

static async getCreatedAt(userId) {
  return Case.findOne({
    attributes: ['createdAt'],
    where : {
      userId: userId
    }
  }).catch((err) => {
    throw err || 'Error getting Updated date!';
  });
}

static async getLastForm(userId) {
  return Case.findOne({
    attributes: ['lastFormFill'],
    where : {
      userId: userId
    }
  }).catch((err) => {
    throw err || 'Error getting Form date!';
  });
}


static async updateIsolation(userId, days){
  days = 14 - days;

  return Case.update({
    isolation_days: days,
  },
  {
    where: { userId:userId }
  }
  ).catch((err) => {
    throw err || 'Error updating Isolation days!';
  });
}


static async getIsolationDays(userId) {
    return Case.findOne({
      attributes : ['isolation_days'],
      where : {
        userId,
        active : 1
      }
    }).catch((err) => {
      throw err || 'Error getting Isolation days!';
    });
}
}
module.exports = UserService;