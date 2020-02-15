import React from 'react';
import ReactDOM from 'react-dom';

import VSplitter from './v-splitter';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VSplitter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
