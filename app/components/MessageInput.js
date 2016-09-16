import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  };

  updateMessage(e) {
    this.setState({ text: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    let message = { text: this.state.text };
    this.props.onMessageSubmit(message);
    this.setState({ text: '' });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name='message' value={this.state.text} onChange={this.updateMessage.bind(this)} />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  };
}

export default MessageInput;