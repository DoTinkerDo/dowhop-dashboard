// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';

const DoWhopDescriptionCard = (props: {
  titleDescription: string,
  downloadURL: string,
  doWhopDescriptionKey: string
}) => {
  const { titleDescription, downloadURL, doWhopDescriptionKey } = props;
  const src = (downloadURL && downloadURL.image1) || downloadURL;
  return (
    <div className="grid-card">
      <Link to={`/dashboard/${doWhopDescriptionKey}`}>
        <Card>
          <CardImg src={src} alt="DoWhopDescription Activity" />
          <CardBody>
            <CardText>{titleDescription}</CardText>
            <CardText>{doWhopDescriptionKey}</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default DoWhopDescriptionCard;
