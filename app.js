var lyr = require('./lyrics.js');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/lyrics', function(req, res) {
  var selection = Math.floor(Math.random() * lyr.length);
  res.send(lyr[selection]);
  // res.send('lyr');
});

app.get('/', function(req, res) {
  console.log("where am I?");
});

// app.listen(3000, function() {
//   console.log('Are we there yet?');
// });

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('What port are we at?', port);
});
