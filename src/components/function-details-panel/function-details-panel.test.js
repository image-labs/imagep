import React from 'react';
import ReactDOM from 'react-dom';

import FunctionDetailsPanel from './function-details-panel';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FunctionDetailsPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
