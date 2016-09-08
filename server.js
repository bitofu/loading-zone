var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ioNamespaces = []; // all active socket.io namespaces

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
  if (!ioNamespaces.includes(req.url)) {
    ioNamespaces.push(req.url);
    generateNamespace(req.url);
  };
  res.sendFile(__dirname + '/public/index.html')
});

http.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});

function generateNamespace(nsp) {
  return(
    io.of(nsp).on('connection', function(socket) {
      socket.on('user:join', function(data) {
        console.log('connected a client to', nsp)
      });

      socket.on('user:message', function(data) {
        io.of(nsp).emit('room:message', data);
      });
    })
  );
};