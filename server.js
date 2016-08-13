var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  console.log('a user connected');
  // socket.on('user-in', function(msg) {
  //   console.log(msg)
  // });
});

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/room.html')
});

app.get('/create-room', function(req, res){
  var name = req.query.room;
  res.send({ message: 'good to go' })
});



http.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});