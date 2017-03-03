import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './pages/App.jsx';
import Featured from './pages/Featured.jsx';
import Help from './pages/Help.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" components={App}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="help" component={Help}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
