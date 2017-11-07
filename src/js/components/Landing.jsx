// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <Link to="/dashboard">Dashboard</Link>
    <h2 className="text-center">Welcome to DoWhop</h2>
    <h3 className="text-center">Landing page</h3>
  </div>
);

export default Landing;
