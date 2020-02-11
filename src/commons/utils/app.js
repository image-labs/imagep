import { setAxiosDefaults } from './axios';

import { getAccessToken, addAccessTokenListener } from './github-auth';
import currentUserReducer from '../reducers/current-user';

function setupCurrentUser(currentUser) {
  if(getAccessToken()) {
    currentUser.load();
  } else {
    currentUser.reset();
  }
}

function setupApp(currentUser) {
  setAxiosDefaults();
  setupCurrentUser(currentUser);
}

function initApp(store){
  const currentUser = currentUserReducer.getActions(store.dispatch);

  setupApp(currentUser);
  addAccessTokenListener(() => setupApp(currentUser));
}

export {
  initApp
};