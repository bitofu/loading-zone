import React from 'react';

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  };

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    window.location.replace(this.state.name);
    return false;
  };

  render() {
    return(
      <div className='container'>
        <h2>Get started by entering a room name:</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name='room-name' onChange={this.updateName.bind(this)} />
          <button type='submit'>Create</button>
        </form>
      </div>
    );
  };
};

export default CreateRoom;