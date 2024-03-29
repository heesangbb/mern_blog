const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();

// middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// db configuration
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo Connection successful'))
  .catch(err => console.log('err'));

// passport
app.use(passport.initialize());
require('./middleware/passport')(passport);

// router
app.get('/', (req, res) => res.send('hello world!!'));
app.use('/api/users', users);
app.use('/api/blog/', require('./routes/api/blog'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on http://localhost:${PORT}`));
