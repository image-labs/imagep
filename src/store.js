import { createStore, combineReducers } from 'redux';

import currentUser from './commons/reducers/current-user';

const rootReducer = combineReducers({
  currentUser
});

const store = createStore(rootReducer);

export default store;