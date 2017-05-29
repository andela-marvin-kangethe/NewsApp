import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AuthPage from './components/auth/AuthPage';
import HomePage from './components/home/HomePage';

export default (
  <Route path="/home" component={App}>
    <IndexRoute path="/auth/login" component={HomePage} />
    <Route path="/auth/login" component={AuthPage} />
  </Route>
);