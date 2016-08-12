var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/create-room', function(req, res){
  console.log(req.query.room)
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('user-in', function(msg) {
    console.log(msg)
  });
});

http.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});