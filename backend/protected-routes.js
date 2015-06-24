var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config'),
    quoter  = require('./quoter');

var app = module.exports = express.Router();

// CHALLENGE: Use express-jwt to validate the user session

app.get('/api/protected/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});
