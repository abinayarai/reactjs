import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello asdf</h1>
        { this.props.children }
        <Link to="help">help</Link>
      </div>
    );
  }
}

export default App;
