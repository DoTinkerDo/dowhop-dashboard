// @flow

import { connect } from 'react-redux';
import DoWhopDescriptionsIndex from '../components/DoWhopDescriptionsIndex';

const mapStateToProps = ({ doWhopDescriptions }) => ({ doWhopDescriptions });

export default connect(mapStateToProps)(DoWhopDescriptionsIndex);
