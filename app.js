var lyr = require('./lyrics.js');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/lyric', function(req, res) {
  var selection = Math.floor(Math.random() * lyr.length);
  res.send(lyr[selection]);
});

<<<<<<< HEAD
=======
// app.listen(3000, function() {
//   console.log('Are we there yet?');
// });

>>>>>>> 3bf38a35d09df8e563ee7922f4b1c9f37760409f
var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('What port are we at?', port);
});

// app.get('/', function(req, res) {
//   var selection = Math.floor(Math.random() * lyr.length);
//   res.send(lyr[selection]);
//   console.log("where am I?");
// });

// app.listen(3000, function() {
//   console.log('Are we there yet?');
// });
