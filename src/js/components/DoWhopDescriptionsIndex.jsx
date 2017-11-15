// @flow

import React from 'react';
import { map } from 'lodash';
import { Row, Col } from 'reactstrap';
import DoWhopDescriptionCard from './DoWhopDescriptionCard';

const DoWhopDescriptionsIndex = ({ doWhopDescriptions }: Object) => {
  const arrayDescription = map(doWhopDescriptions);
  const descendingDescriptions = arrayDescription.reverse();
  return (
    <div>
      <Row>
        <Col>
          <div className="dowhop-grid">
            {map(descendingDescriptions, doWhopDescription => (
              <DoWhopDescriptionCard key={doWhopDescription.doWhopDescriptionKey} {...doWhopDescription} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DoWhopDescriptionsIndex;
