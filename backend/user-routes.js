var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

var app = module.exports = express.Router();

// NOTE: This should be a database of users.
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto',
  provider: 'local'
}];

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60*5 });
}


// Regular signup
app.post('/users', function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }
  if (_.find(users, {username: req.body.username, provider: 'local'})) {
   return res.status(400).send("A user with that username already exists");
  }

  var profile = _.pick(req.body, 'username', 'password', 'extra');
  profile.provider = 'local';
  profile.id = _.max(users, 'id').id + 1;

  users.push(profile);

  res.status(201).send({
    id_token: createToken(profile)
  });
});

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

  res.status(201).send({
    id_token: createToken(user)
  });
});

// CHALLENGE: Create a route for /auth/facebook that appropriately uses passport

// CHALLENGE: Create a route for /auth/facebook/callback to handle authentication response

// CHALLENGE: Instantiate passport with an appropriate FacebookStrategy

