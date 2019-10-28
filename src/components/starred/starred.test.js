import React from 'react';
import ReactDOM from 'react-dom';

import Starred from './starred';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Starred />, div);
  ReactDOM.unmountComponentAtNode(div);
});
