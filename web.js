var express = require('express');

var buffer = new Buffer(fs.readFileSync('index.html', 'utf-8'));

app.get('/', function(request, response) {
  var file = require('fs');
  var buffer = new Buffer(256);
  buffer = fs.readFileSync('index.html', 'utf-8'));

  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
