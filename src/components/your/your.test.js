import React from 'react';
import ReactDOM from 'react-dom';

import Your from './your';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Your />, div);
  ReactDOM.unmountComponentAtNode(div);
});
