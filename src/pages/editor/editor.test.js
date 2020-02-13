import React from 'react';
import ReactDOM from 'react-dom';

import Editor from './editor';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Editor />, div);
  ReactDOM.unmountComponentAtNode(div);
});
