// @flow

import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import DoWhopDescriptionsIndex from '../components/DoWhopDescriptionsIndex';

const mapStateToProps: MapStateToProps<*, *, *> = ({ doWhopDescriptions }) => ({ doWhopDescriptions });

export default connect(mapStateToProps)(DoWhopDescriptionsIndex);
