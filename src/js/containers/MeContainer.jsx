// @flow

import { connect } from 'react-redux';
import Me from '../components/Me';

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps)(Me);
