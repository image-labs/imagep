import { get } from 'lodash';

const RESP_MSG_PATH = "response.data.message";
const UNKNOWN_ERROR_MSG = "Unknown Error!";
function getErrorMsg(error) {
  return get(error, RESP_MSG_PATH, error.message || UNKNOWN_ERROR_MSG);
}

export {
  getErrorMsg
};