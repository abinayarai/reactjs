import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello App</h1>
        { this.props.children }
        <button class='btn'><Link to='help'>help</Link></button>
        <button class='btn'><Link to='about'>about</Link></button>
      </div>
    );
  }
}

export default App;
