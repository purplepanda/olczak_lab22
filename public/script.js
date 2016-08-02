//script.js, any js file that might perform AJAX operations
var lyric = '';

$.get('/api/lyric', function(data) {
  lyric = data;
  console.log(lyric);
});
//logic to display lyric on the page
