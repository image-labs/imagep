import axios from 'axios';

import { getAccessToken, addAccessTokenListener } from './github-auth';
import currentUserReducer from '../reducers/current-user';

import GITHUB_CONF from "../../configs/github-conf";

function setAxiosDefault() {
  axios.defaults.baseURL = GITHUB_CONF.apiDomain;
  axios.defaults.headers.common['Authorization'] = "token " + getAccessToken();
}

function setupCurrentUser(currentUser) {
  if(getAccessToken()) {
    currentUser.load();
  } else {
    currentUser.reset();
  }
}

function setupApp(currentUser) {
  setAxiosDefault();
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