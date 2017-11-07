// @flow

import React from 'react';

const Me = ({ currentUser }: Object) => (
  <div>
    <pre>
      <code>{JSON.stringify(currentUser, null, 4)}</code>
    </pre>
  </div>
);

export default Me;
