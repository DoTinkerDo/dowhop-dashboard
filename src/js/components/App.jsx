// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Wrapper from './Wrapper';
import PrivateRoute from './PrivateRoute';
import PropsRoute from './PropsRoute';
import Login from './Login';
import Landing from './Landing';
import MainNav from './MainNav';
import MeContainer from '../containers/MeContainer';
import ProfileIndexContainer from '../containers/ProfileIndexContainer';
import ProfileContainer from '../containers/ProfileContainer';
import FourOhFour from './FourOhFour';

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <PropsRoute path="/login" component={Login} />
        <PrivateRoute path="/me" component={MeContainer} redirectTo="/login" />
        <PrivateRoute path="/profile-index" component={ProfileIndexContainer} redirectTo="/my-profile/login" />
        <PrivateRoute path="/my-profile" component={ProfileContainer} redirectTo="/login" />
        <Route component={FourOhFour} />
      </Switch>
    </Wrapper>
  </Provider>
);

export default App;
