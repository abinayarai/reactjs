import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a href="../" className="navbar-brand">My App</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='help'>help</Link></li>
              <li><Link to='about'>about</Link></li>
            </ul>
          </div>
        </div>
        <div>
          { this.props.children }
        </div>

      </div>
    );
  }
}

export default App;
