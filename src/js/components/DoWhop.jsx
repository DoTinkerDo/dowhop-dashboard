// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { filter } from 'lodash';
import { Row } from 'reactstrap';
import DoWhopButton from './DoWhopButton';
import DoWhopDescriptionCard from './DoWhopDescriptionCard';
import EditDoWhop from './EditDoWhop';
import ImageUrls from './ImageUrls';

const DoWhop = (props: { match: Match, doWhopDescriptions: Object }) => {
  const { match, doWhopDescriptions } = props;
  const key = match.params.dowhopDescriptionKey;
  const doWhopDescription = filter(doWhopDescriptions, description => description.doWhopDescriptionKey === key)[0];
  return (
    <div>
      <Row>
        <DoWhopDescriptionCard
          titleDescription={doWhopDescription && doWhopDescription.titleDescription}
          downloadURL={doWhopDescription && doWhopDescription.downloadURL}
          doWhopDescriptionKey={doWhopDescription && doWhopDescription.doWhopDescriptionKey}
          creatorDescription={doWhopDescription && doWhopDescription.creatorDescription}
          doerDescription={doWhopDescription && doWhopDescription.doerDescription}
        />
      </Row>
      <Row className="">
        <EditDoWhop doWhopDescriptionKey={doWhopDescription && doWhopDescription.doWhopDescriptionKey} />
      </Row>
      <ImageUrls downloadURL={doWhopDescription && doWhopDescription.downloadURL} />
      <Row className="float-right">
        <Link to="/dashboard/">
          <DoWhopButton>Back</DoWhopButton>
        </Link>
      </Row>
    </div>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = ({ doWhopDescriptions }) => ({ doWhopDescriptions });

export default connect(mapStateToProps)(DoWhop);
