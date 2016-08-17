import React from 'react';
import CreateRoom from './CreateRoom';
import Room from './Room';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  };

  componentWillMount() {
    this.setState({
      name: window.location.pathname.slice(1)
    });
  };

  render() {
    return(
      <div className='container'>
        { this.state.name ?
          <Room name={this.state.name} /> :
          <CreateRoom />
        }
      </div>
    );
  };
};

export default App;