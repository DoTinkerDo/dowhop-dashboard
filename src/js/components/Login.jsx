// @flow

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import FirebaseUIAuth from './FirebaseUIAuth';
import firebase, { ui } from '../../firebase';

type Props = {
  location: Object,
  currentUser: Object,
  authentication: Object
};

class Login extends Component<Props> {
  uiConfig = {
    callbacks: {
      signInSuccess: () => false
    },
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };

  props: Props;

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } };
    if (this.props.currentUser.isAdmin) {
      return <Redirect to={from} />;
    } else if (!this.props.currentUser.isAdmin && this.props.authentication.isAuthenticated) {
      return (
        <div>
          <p className="center-text">You must be logged in as an admin to view the page at {from.pathname}</p>
        </div>
      );
    }
    return (
      <Row>
        <Col>
          <FirebaseUIAuth ui={ui} {...this.uiConfig} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ currentUser, authentication }) => ({ currentUser, authentication });

export default connect(mapStateToProps)(Login);
