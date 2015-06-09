var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
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

// Facebook signup
app.get('/auth/facebook', 
  passport.authenticate('facebook', {session: false}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: 'http://localhost:3000/#/#error', session: false}),
  function(req, res) {
    var jwt = createToken(req.user);
    res.redirect('http://localhost:3000/#/#jwt=' + jwt);
  });

passport.use(new FacebookStrategy({
    clientID: '1113520895341582',
    clientSecret: '98075e77f6320447cef79152cfa0cdfc',
    callbackURL: "http://localhost:3001/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    
    var user = {
      username: profile.displayName,
      provider: 'facebook',
      token: accessToken
    };
    user.id = _.max(users, 'id').id + 1;
    users.push(user);
    done(null, user);
  }
));

