$(document).ready(function() {
  var lyric = '';

  (function ajaxCall() {
    $.get('/api/lyric', function(data) { //logic to display lyric on the page
      lyric = data;
      var $textInsert = $("#quote"); //create a jQuery variable of empty div
      $textInsert.text(lyric); //append randomly generated lyric
    });
    setInterval(ajaxCall, 5000); //interval function
  })();
});
