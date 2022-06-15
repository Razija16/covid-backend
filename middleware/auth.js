const { decode } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
require('dotenv').config()

// Auth middleware check is user have token

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);

  if (!token) {
    res.status(401).json({ msg: 'Unauthorized access!' }).end();
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Authorization error!' }).end();
  }
};

const adminAuth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    res.status(401).json({ msg: 'Unauthorized access!' }).end();
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.is_admin == 0) {
      res.status(403).json({ msg: 'Unauthorized access!' }).end();
      return;
    }
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send('Authorization error!').end();
  }
};

const userData = (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    res.status(401).json({ msg: 'Token Error' }).end();
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;
    res.status(201).send(decoded);
  } catch (err) {
    res.status(401).send({ message: 'Authorization error!' }).end();
  }
  
}

module.exports = { auth, adminAuth, userData };
