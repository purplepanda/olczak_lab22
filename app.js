var ex = require('./lyrics.js');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/lyric', function(req, res) {
  res.send('hello world');
});

// app.listen(3000, function() {
//   console.log('Are we there yet?');
// });

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('What port are we at?', port);
});
