const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const SECRET = process.env.SECRET;

const User = require('../../models/User');

router.post('/signup', (req, res) => {
  console.log('users.js', '/signup', req.body);
  //TODO: validateion

  const { name, email, password } = req.body;

  User.findOne({ $or: [{ name }, { email }] }).then(user => {
    if (user) {
      if (user.email === email) {
        return res.status(400).json({ email: 'Email already exists.' });
      } else {
        return res.status(400).json({ name: 'Name already exists.' });
      }
    }

    const newUser = new User({ name, email, password });
    newUser
      .save()
      .then(user => res.json(user))
      .catch(err => console.log('users.js', 'Error createing a new user'));
  });
});

router.post('/login', (req, res) => {
  console.log('users.js', '/login', req.body);
  //TODO: validation

  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ email: 'Email not found' });
    }

    user.comparePassword(password).then(isMatch => {
      if (!isMatch) {
        return res.status(400).json({ password: 'Password Incorrect' });
      }
      user.generateToken((err, token) => {
        if (err) {
          return res.status(400).send(err);
        }
        return res.json({
          success: true,
          token: 'Bearer ' + token,
        });
      });
    });
  });
});

module.exports = router;
