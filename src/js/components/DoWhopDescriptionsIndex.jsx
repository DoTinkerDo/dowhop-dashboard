// @flow

import React from 'react';
import { map } from 'lodash';
import { Row, Col } from 'reactstrap';
import DoWhopDescriptionCard from './DoWhopDescriptionCard';

const DoWhopDescriptionsIndex = ({ doWhopDescriptions }: Object) => (
  <div>
    <h2 className="text-center">DoWhop Descriptions</h2>
    <Row>
      <Col>
        <div className="dowhop-grid">
          {map(doWhopDescriptions, doWhopDescription => (
            <DoWhopDescriptionCard key={doWhopDescription.doWhopDescriptionKey} {...doWhopDescription} />
          ))}
        </div>
      </Col>
    </Row>
  </div>
);

export default DoWhopDescriptionsIndex;
