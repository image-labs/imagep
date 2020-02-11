import axios from 'axios';
import { get } from 'lodash';

import { getAccessToken } from './github-auth';

import GITHUB_CONF from "../../configs/github-conf";

const STATUS_TYPES = {
  LOADING:  Symbol("LOADING"),
  SAVING:  Symbol("SAVING"),
  LOADING_ERROR:  Symbol("LOADING_ERROR"),
  SAVING_ERROR:  Symbol("SAVING_ERROR"),
};

const RESP_MSG_PATH = "response.data.message";
const UNKNOWN_ERROR_MSG = "Unknown Error!";
function getErrorMsg(error) {
  return get(error, RESP_MSG_PATH, error.message || UNKNOWN_ERROR_MSG);
}


//const APP_NAME = "imagep-app";
const ACCEPT_HEADER = "application/vnd.github.v3+json";
function setAxiosDefaults() {
  axios.defaults.baseURL = GITHUB_CONF.apiDomain;
//  axios.defaults.headers.common['User-Agent'] = APP_NAME;
  axios.defaults.headers.common['Accept'] = ACCEPT_HEADER;
  axios.defaults.headers.common['Authorization'] = "token " + getAccessToken();
}

function isActive(status) {
  return status === STATUS_TYPES.LOADING || status === STATUS_TYPES.SAVING;
}

export {
  STATUS_TYPES,

  setAxiosDefaults,
  isActive,
  getErrorMsg
};