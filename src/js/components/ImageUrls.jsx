// @flow

import React from 'react';
import injectSheet from 'react-jss';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { map } from 'lodash';
import { Row, Card, CardImg, CardBody, CardText, CardSubtitle } from 'reactstrap';

const styles = {
  margin: {
    marginBottom: '20px',
    marginTop: '20px'
  },
  font: {
    fontSize: '60%'
  },
  icon: {
    marginRight: '10px',
    '&:hover': {
      color: '#000000 !important'
    }
  }
};

const generateKey = () => `${Math.random()}_${moment().unix()}`;

const Image = (props: Object) => (
  <div className={props.classes.margin}>
    {props.url && (
      <a href={props.url}>
        <CardSubtitle>Click to download image</CardSubtitle>
      </a>
    )}
    {props.url && <CardImg src={props.url} alt="DoWhopDescription Activity" />}
  </div>
);

const Url = (props: Object) => (
  <span>
    {props.url && (
      <code className={props.classes.font}>
        <CopyToClipboard text={props.url}>
          <span className={`fa fa-clipboard ${props.classes.icon}`} />
        </CopyToClipboard>
        Url: {props.url}
      </code>
    )}
    <br />
  </span>
);

const ImageUrls = (props: { downloadURL: Object, classes: Object }) => {
  const { downloadURL, classes } = props;
  const urls = [];
  urls.push((downloadURL && downloadURL.image1) || downloadURL);
  urls.push((downloadURL && downloadURL.image2) || '');
  return (
    <Row>
      <Card>
        <CardBody>
          {map(urls, url => <Image url={url} classes={classes} key={generateKey()} />)}
          <CardText>{map(urls, url => <Url url={url} classes={classes} key={generateKey()} />)}</CardText>
        </CardBody>
      </Card>
    </Row>
  );
};

export default injectSheet(styles)(ImageUrls);
