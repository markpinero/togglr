import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import TimerList from './TimerList';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="dashboard" component={TimerList} />
    </Route>
  </Router>,
  document.getElementById('root')
);