var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken');

var app = module.exports = express.Router();

// NOTE: This should be a database of users.
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto',
  provider: 'local'
}];


function createToken(user) {
  // CHALLENGE: Use jsonwebtoken to create and return a JWT
}

// Register
app.post('/users', function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }
  if (_.find(users, {username: req.body.username, provider: 'local'})) {
   return res.status(400).send("A user with that username already exists");
  }

  // CHALLENGE: Create a new user and add it to the users array

  // CHALLENGE: Return the appropriate status and JWT
});


// Login
app.post('/sessions/create', function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  var user = _.find(users, {username: req.body.username});
  if (!user) {
    return res.status(401).send("The username or password don't match");
  }

  if (user.password !== req.body.password) {
    return res.status(401).send("The username or password don't match");
  }

  // CHALLENGE: Return the appropriate status and JWT
});

