const jwt = require('jsonwebtoken');

// Auth middleware check is user have token

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

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

module.exports = { auth };
