var app = require('express')();
var http = require('http').Server(app)

app.get('/', function(req, res){
  res.send('<h1>Hello Gay</h1>');
});

http.listen(5000, function() {
  console.log('listning on *:5000');
});
