import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store'
import { initApp } from './commons/utils/app'
import { renderCheck } from './commons/utils';
import * as serviceWorker from './commons/utils/service-worker';

import App from './components/app/app';

import './index.scss';

initApp(store);

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
renderCheck();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
