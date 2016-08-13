import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <h2>Get started by entering a room name:</h2>
        <form id="room-namer">
          <input type="text" id="room-name" name="room-name" placeholder="name name name" />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  };
};

export default App;