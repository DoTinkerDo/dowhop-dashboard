// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import DoWhopButton from './DoWhopButton';

const DoWhop = () => (
  <div>
    <h1>I am a DoWhop Detail View</h1>
    <Link to="/dashboard/">
      <DoWhopButton>Back</DoWhopButton>
    </Link>
  </div>
);

export default DoWhop;
