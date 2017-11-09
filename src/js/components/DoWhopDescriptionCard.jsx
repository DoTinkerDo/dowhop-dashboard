// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

const DoWhopDescriptionCard = (props: {
  titleDescription: string,
  downloadURL: string,
  doWhopDescriptionKey: string
}) => {
  const { titleDescription, downloadURL, doWhopDescriptionKey } = props;
  const src = (downloadURL && downloadURL.image1) || downloadURL;
  return (
    <div className="dowhop-grid-card">
      <Card>
        <Link to={`/dashboard/${doWhopDescriptionKey}`}>
          <CardTitle>{titleDescription}</CardTitle>
          <CardImg src={src} alt="DoWhopDescription Activity" />
        </Link>
        <CardBody>
          <CardText>{doWhopDescriptionKey}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DoWhopDescriptionCard;
