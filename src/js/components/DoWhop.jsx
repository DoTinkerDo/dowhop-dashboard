// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { connect } from 'react-redux';
import DoWhopButton from './DoWhopButton';

const DoWhop = (props: { match: Match }) => {
  const { match } = props;
  const dowhopDescriptionKey = match.params.dowhopDescriptionKey;
  return (
    <div>
      <h1>I am a DoWhop Detail View</h1>
      <p>{dowhopDescriptionKey}</p>
      <Link to="/dashboard/">
        <DoWhopButton>Back</DoWhopButton>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ doWhopDescriptions }) => ({ doWhopDescriptions });

export default connect(mapStateToProps)(DoWhop);
