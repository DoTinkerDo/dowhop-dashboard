// @flow

import React from 'react';
import { map } from 'lodash';
import { Row, Col } from 'reactstrap';

const DoWhopDescriptionsIndex = ({ doWhopDescriptions }: Object) => (
  <div>
    <h2 className="text-center">DoWhop Descriptions</h2>
    <Row>
      <Col>
        <div className="profile-grid">
          {map(doWhopDescriptions, doWhopDescription => (
            <pre key={doWhopDescription.doWhopDescriptionKey}>
              <code>{JSON.stringify(doWhopDescription, null, 4)}</code>
            </pre>
          ))}
        </div>
      </Col>
    </Row>
  </div>
);

export default DoWhopDescriptionsIndex;
