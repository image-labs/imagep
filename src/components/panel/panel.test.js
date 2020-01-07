import React from 'react';
import ReactDOM from 'react-dom';

import Panel from './gallery';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Panel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
