export default function(socket) {
  return {
    "init": function() {
      socket.emit('user:join', { room: window.location.pathname, message: 'hi there from ' + socket.id });

      socket.on('room:message', function(data) {
        console.log(data);
      });
    },
    "sendMessage": function(data) {
      socket.emit('user:message', data);
    },
  } 

} 
