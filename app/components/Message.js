import React from 'react';

class Message extends React.Component {
  return(
    <div className='message'>
      {this.props.message}
    </div>
  );
};

export default Message;