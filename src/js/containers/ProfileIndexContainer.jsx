// @flow

import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import ProfileIndex from '../components/ProfileIndex';

const mapStateToProps: MapStateToProps<*, *, *> = ({ appUsers }) => ({ appUsers });

export default connect(mapStateToProps)(ProfileIndex);
