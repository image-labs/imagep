import React from 'react';
import ReactDOM from 'react-dom';

import YourFunctions from './your-functions';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YourFunctions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
