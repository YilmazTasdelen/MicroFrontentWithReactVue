import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default ({ history }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          {/* for react wich router meets the needs Router (router without history ) or Browser history  */}

          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />

        </Router>
      </StylesProvider>
    </div>
  );
};
