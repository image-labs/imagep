import React from 'react';
import ReactDOM from 'react-dom';

import AddLib from './add-lib-input';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddLib />, div);
  ReactDOM.unmountComponentAtNode(div);
});
