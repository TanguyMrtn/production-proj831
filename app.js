// const http = require('http');
// const express = require('express');
// const app = express();

var express     = require('express');
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 5000;
var cors        = require('cors');

var app = express();
app.use(cors());
app.use(express.static('www'));


// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the passport package in our application

// Demo Route (GET http://localhost:5000)
app.get('/', function(req, res) {
  return res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);

