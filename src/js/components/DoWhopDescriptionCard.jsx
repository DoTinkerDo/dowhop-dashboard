// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';

const DoWhopDescriptionCard = (props: {
  titleDescription: string,
  downloadURL: string,
  doWhopDescriptionKey: string,
  creatorDescription: string,
  doerDescription: string
}) => {
  const { titleDescription, downloadURL, doWhopDescriptionKey, creatorDescription, doerDescription } = props;
  const src = (downloadURL && downloadURL.image1) || downloadURL;
  return (
    <div className="dowhop-grid-card">
      <Card>
        <Link to={`/dashboard/${doWhopDescriptionKey}`}>
          <CardImg src={src} alt="DoWhopDescription Activity" />
        </Link>
        <CardTitle>{titleDescription}</CardTitle>
        <CardBody>
          <CardSubtitle>Creator Email</CardSubtitle>
          <CardText>{creatorDescription}</CardText>
          <CardSubtitle>Doers Email(s)</CardSubtitle>
          <CardText>{doerDescription}</CardText>
          <CardText>{doWhopDescriptionKey}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DoWhopDescriptionCard;
