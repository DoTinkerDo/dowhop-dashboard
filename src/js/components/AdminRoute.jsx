// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import renderMergedProps from '../helpers/renderMergedProps';

const AdminRoute = ({ component, redirectTo, currentUser, ...rest }: Object) => (
  <Route
    {...rest}
    render={routeProps =>
      currentUser.isAdmin ? (
        renderMergedProps(component, routeProps, rest)
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: routeProps.location }
          }}
        />
      )}
  />
);

const mapStateToProps: MapStateToProps<*, *, *> = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps)(AdminRoute);
