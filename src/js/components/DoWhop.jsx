// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { filter } from 'lodash';
import DoWhopButton from './DoWhopButton';
import DoWhopDescriptionCard from './DoWhopDescriptionCard';

const DoWhop = (props: { match: Match, doWhopDescriptions: Object }) => {
  const { match, doWhopDescriptions } = props;
  const key = match.params.dowhopDescriptionKey;
  const doWhopDescription = filter(doWhopDescriptions, description => description.doWhopDescriptionKey === key)[0];
  return (
    <div>
      <h1>I am a DoWhop Detail View</h1>
      <DoWhopDescriptionCard
        titleDescription={doWhopDescription && doWhopDescription.titleDescription}
        downloadURL={doWhopDescription && doWhopDescription.downloadURL}
        doWhopDescriptionKey={doWhopDescription && doWhopDescription.doWhopDescriptionKey}
      />
      <p>{key}</p>
      <Link to="/dashboard/">
        <DoWhopButton>Back</DoWhopButton>
      </Link>
    </div>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = ({ doWhopDescriptions }) => ({ doWhopDescriptions });

export default connect(mapStateToProps)(DoWhop);
