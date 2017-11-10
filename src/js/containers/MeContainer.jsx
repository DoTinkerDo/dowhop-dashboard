// @flow

import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import Me from '../components/Me';

const mapStateToProps: MapStateToProps<*, *, *> = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps)(Me);
