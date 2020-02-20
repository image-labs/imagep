import axios from 'axios';

import Env from './env';

import GITHUB_CONF from "../../configs/github-conf";
let authConf = Env.isDev ? GITHUB_CONF.auth.dev : GITHUB_CONF.auth.prod;

const LS_GITHUB_STATE_KEY = "imagep_github_state";
const LS_ACCESS_TOKEN_KEY = "imagep_access_token";

function makeGithubState(length) {
  let result           = [];
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
     result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join("");
}

function generateSignInURL() {
  let state = localStorage.getItem(LS_GITHUB_STATE_KEY);

  if(!state) {
    state = makeGithubState(12);
    localStorage.setItem(LS_GITHUB_STATE_KEY, state);
  }

  let url = new URL(authConf.authorizeURL);
  url.searchParams.set("client_id", authConf.clientId);
  url.searchParams.set("state", state);
  url.searchParams.set("scope", "gist");

  return url.toString();
};

function signIn(code, state) {
  if(state === localStorage.getItem(LS_GITHUB_STATE_KEY)) {
    return axios.post(authConf.accessURL, {
      code,
      state
    }).then(auth => {
      setAccessToken(auth.data.access_token);
      return auth;
    }).catch(error => {
      setAccessToken();
      throw error;
    });
  }

  return Promise.reject();
};

function signOut() {
  setAccessToken();
}

function getAccessToken() {
  return localStorage.getItem(LS_ACCESS_TOKEN_KEY);
}

function setAccessToken(token) {
  token = (typeof token === "string") ? token : "";
  localStorage.setItem(LS_ACCESS_TOKEN_KEY, token);
  window.dispatchEvent(new StorageEvent('storage', {
    key: LS_ACCESS_TOKEN_KEY,
    newValue: token
  }));
}

function addAccessTokenListener(handler) {
  window.addEventListener("storage", event => {
    if(event.key === LS_ACCESS_TOKEN_KEY) {
      handler(event);
    }
  });
}

export {
  generateSignInURL,

  signIn,
  signOut,

  getAccessToken,
  addAccessTokenListener
};