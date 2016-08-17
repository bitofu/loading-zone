import React from 'react';
var socket = io(window.location.pathname);

class Room extends React.Component {
  componentWillMount() {
    socket.emit('user-in', { room: window.location.pathname, message: 'hi there from ' + socket.id });
    console.log(window.location.href)
  };

  render() {
    socket.on('greetings', function(message) {
      console.log(message)
    })

    return(
      <div>
        <p>hi</p>
      </div>
    );
  };
};

export default Room;