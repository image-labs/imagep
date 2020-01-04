import React from 'react';
import ReactDOM from 'react-dom';

import UserMenu from './user-menu';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
