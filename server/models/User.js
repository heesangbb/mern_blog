const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const userModel = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
};

const userSchema = new Schema(userModel);

userSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  return bcrypt.compare(plainPassword, this.password);
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  const payload = {
    id: user.id,
    name: user.name,
  };

  jwt.sign(payload, SECRET, { expiresIn: 3600 }, (err, token) => {
    if (err) {
      console.log('User.js', 'generateToken err', err);
      return cb(err);
    }
    cb(null, token);
  });
};

module.exports = mongoose.model('users', userSchema);
