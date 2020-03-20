const jwt = require('jsonwebtoken');
const config = require('config');

// middleware fn
module.exports = function(req, res, next) {
  // get token from header
  const token = req.header('x-auth-token');

  // check if token exists

  if (!token) {
    return res.status(401).json({ msg: 'no token so authorization denied' });
  }

  // verify the token

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' });
  }
};
