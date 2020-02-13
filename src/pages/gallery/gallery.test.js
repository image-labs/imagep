import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './gallery';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
