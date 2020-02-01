import { createStore, combineReducers } from 'redux';

import currentUser from './commons/reducers/current-user';
import currentFunction from './commons/reducers/current-function';

const rootReducer = combineReducers({
  currentUser,
  currentFunction
});

const store = createStore(rootReducer);

export default store;