import React from 'react';
import ReactDOM from 'react-dom';

import StarredFunctions from './starred-functions';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarredFunctions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
