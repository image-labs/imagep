import React from 'react';
import ReactDOM from 'react-dom';

import SignIn from './sign-in';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
