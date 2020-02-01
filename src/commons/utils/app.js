import axios from 'axios';

import { getAccessToken, addAccessTokenListener } from './github-auth';
import currentUserReducer from '../reducers/current-user';

import GITHUB_CONF from "../../configs/github-conf";

const APP_NAME = "imagep-app";
const ACCEPT_HEADER = "application/vnd.github.v3+json";

function setAxiosDefault() {
  axios.defaults.baseURL = GITHUB_CONF.apiDomain;
  axios.defaults.headers.common['User-Agent'] = APP_NAME;
  axios.defaults.headers.common['Accept'] = ACCEPT_HEADER;
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