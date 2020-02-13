import { createStore, combineReducers } from 'redux';

import currentUser from './reducers/current-user';
import currentFunction from './reducers/current-function';

const rootReducer = combineReducers({
  currentUser,
  currentFunction
});

const store = createStore(rootReducer);

export default store;