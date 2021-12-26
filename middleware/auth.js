const jwt = require('jsonwebtoken');
const User = require('../models/userSchema')

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  const payload = jwt.verify(authorization, 'fjoiy43yfh8743tyf4hry4hf78436hrfyr7437thf48395')
  User.findOne({ userName: payload.userName })
    .then(user => {
      req.user = user;
      next();
    });
}



module.exports = auth;
