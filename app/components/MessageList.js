import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
  render() {
    console.log(this.props.messages)
    return(
      <div className="message-list">
      <h3>Messages</h3>
        { this.props.messages.map((message, i) => {
            return(<Message message={message} key={i} />);
          })
        }
      </div>
    );
  }
};

export default MessageList;