import React from 'react';
var socket = io(window.location.pathname);
var clientSocket = require('../js/client-socket')(socket);

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  };

  componentWillMount() {
    clientSocket.init();
  };

  updateMessage(e) {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    clientSocket.sendMessage({ message: this.state.message });
    this.setState({ message: '' });
    return false;
  };

  render() {
    return(
      <div className='chatroom'>
        <p>hi</p>
        <div className='messages'></div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name='message' value={this.state.message} onChange={this.updateMessage.bind(this)} />
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  };
};

export default Room;