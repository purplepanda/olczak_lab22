//script.js, any js file that might perform AJAX operations
// var lyric = '';
var lyric = '';

$.get('/api/lyrics', function(data) {
  lyric = data;
  var textInsert = document.getElementById("quote");
  var textNode = document.createTextNode(lyric);
  textInsert.appendChild(textNode);
  console.log(lyric);
});
//logic to display lyric on the page

// app.get('/', function(req, res) {
//   var selection = Math.floor(Math.random() * lyr.length);
//   res.send(lyr[selection]);
// });
