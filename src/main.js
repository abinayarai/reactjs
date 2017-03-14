import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import About from './pages/About.jsx';
import App from './pages/App.jsx';
import Featured from './pages/Featured.jsx';
import Help from './pages/Help.jsx';

import todoApp from './reducers/reducers';

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
