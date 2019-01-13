// server.js
// load the things we need

var express = require('express');
var app = express();

// set the view enjine to ejs
app.set('view engine', 'ejs');

// use res.render to load an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('listening on port 8080...');