// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Wrapper from './Wrapper';
import AdminRoute from './AdminRoute';
import PropsRoute from './PropsRoute';
import Login from './Login';
import DashboardContainer from '../containers/DashboardContainer';
import Landing from './Landing';
import FourOhFour from './FourOhFour';

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PropsRoute path="/login" component={Login} />
        <AdminRoute path="/dashboard" component={DashboardContainer} redirectTo="/login" />
        <Route component={FourOhFour} />
      </Switch>
    </Wrapper>
  </Provider>
);

export default App;
