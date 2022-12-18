import React from 'react';
import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default () => {
  const history = createBrowserHistory();
  return <div>
    <div>Hi there </div>
    <hr />
    <Router history={history}>
      <Route path="/" component={MarketingApp} />
      {/*  <MarketingApp /> */}
    </Router>
  </div>;
};
