var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ioNamespaces = []; // all active socket.io namespaces

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
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
      socket.on('user-in', function() {
        console.log('connected bruuh to', socket)
      });
    })
  );
};