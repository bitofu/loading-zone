import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

var socket = io(window.location.pathname);

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  };

  componentWillMount() {
    socket.emit('user:join', { room: window.location.pathname, message: 'hi there from ' + socket.id });
    socket.on('room:message', this.receiveMessage.bind(this));
  };

  receiveMessage(message) {
    let newMessages = this.state.messages;
    newMessages.push(message);
    this.setState({ messages: newMessages });
  };

  handleMessageSubmit(message) {
    socket.emit('user:message', message);
    return false;
  };

  render() {
    return(
      <div className='chat-room'>
        <MessageList messages={this.state.messages} />
        <MessageInput onMessageSubmit={this.handleMessageSubmit} />
      </div>
    );
  };
};

export default Room;