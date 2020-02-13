import { createReducer, func } from 'xreducer';
import { get } from 'lodash';
import axios from 'axios';
import update from 'immutability-helper';

import { STATUS_TYPES, isActive, getErrorMsg } from '../commons/utils/axios';

import LIBRARIES from '../configs/libraries';

const DEFAULT_NAME = "Untitled function";
const DEFAULT_STATMENT = "// ImageP"
const DETAILS_FILE_NAME = "imagep.json";

function loadFunction(actions, getReducerState, id) {
  const state = getReducerState();

  if(isActive(get(state, "ajax.status"))) {
    return Promise.reject();
  }

  actions.setAjax({
    status: STATUS_TYPES.LOADING,
    message: "Loading function"
  });

  return axios.get(`gists/${id}`).then(resp => {
    const state = responseDataToState(resp.data);
    actions.set(state);
    actions.loadStarred();
    return state;
  }).catch(error => {
    actions.setAjax({
      status: STATUS_TYPES.LOADING_ERROR,
      message: getErrorMsg(error)
    });
  });

}

function getStatementsFileName(details) {
  return `statements.${details.language}`;
}

function responseDataToState(data) {
  const detailsJson = get(data, ["files", DETAILS_FILE_NAME, "content"]);

  if(!detailsJson) {
    throw new Error("Not created with ImageP");
  }

  const {inputs, ...details} = JSON.parse(detailsJson);
  let statements = get(data, ["files", getStatementsFileName(details), "content"]);

  if(statements === DEFAULT_STATMENT) {
    statements = "";
  }

  return {
    id: data.id,
    details: {
      ...details,

      owner: {
        login: data.owner.login,
        avatarURL: data.owner.avatar_url,
        profileURL: data.owner.html_url,
      },
      gitHubURL: data.html_url,

      isStarred: false,
    },
    inputs,
    statements
  };
}

function stateToRequestData(state) {
  const details = state.details;
  const description = state.details.name || DEFAULT_NAME;

  let files = {
    [DETAILS_FILE_NAME]: {
      content: JSON.stringify({
        name: description,
        language: details.language,
        libs: details.libs,
        inputs: state.inputs
      }),
    },
    [getStatementsFileName(details)]: {
      content: state.statements || DEFAULT_STATMENT
    }
};

  return {
    description,
    public: true,
    files: files
  };
}

function saveFunction(actions, getReducerState, currentUser) {
  const state = getReducerState();

  if(isActive(get(state, "ajax.status"))) {
    return Promise.reject();
  }

  const data = stateToRequestData(state);

  actions.setAjax({
    status: STATUS_TYPES.SAVING,
    message: "Saving function"
  });

  let savePromise;
  if(state.id && currentUser.login === state.details.owner.login) {
    // Update existing gist
    savePromise = axios.patch(`gists/${state.id}`, data);
  } else {
    // Create new gist for current user
    savePromise = axios.post('gists', data);
  }

  savePromise = savePromise.then(resp => {
    const state = responseDataToState(resp.data);
    actions.set(state);
    actions.loadStarred();
    return state;
  }, error => {
    const msg = getErrorMsg(error);
    actions.setAjax({
      status: STATUS_TYPES.SAVING_ERROR,
      message: `Save Failed : ${msg}`
    });
    throw error;
  });

  return savePromise;
}

function loadStarred(actions, getReducerState) {
  const state = getReducerState();

  actions.setStarred(STATUS_TYPES.LOADING);
  return axios.get(`gists/${state.id}/star`).then(resp => {
    actions.setStarred(true);
  }, error => {
    actions.setStarred(false);
  });
}

function toggleStarred(actions, getReducerState) {
  const state = getReducerState();

  actions.setStarred(STATUS_TYPES.SAVING);
  let promise = state.details.isStarred ? axios.delete(`gists/${state.id}/star`) : axios.put(`gists/${state.id}/star`);
  return promise.then(resp => {
    actions.setStarred(!state.details.isStarred);
  }, error => {
    actions.setStarred(state.details.isStarred);
  });
}

const INITIAL_STATE = {
  id: undefined,
  details: {
    name: DEFAULT_NAME,
    language: "js",

    owner: undefined,
    gitHubURL: undefined,

    isStarred: false,

    libs: [LIBRARIES[0]],
  },
  inputs: [],
  statements: "",

  ajax: null
};

const currentFunctionReducer = createReducer({
  set: (state, payload) => payload,
  reset: () => INITIAL_STATE,

  setName: (state, payload) => update(state, {
    details: {name: {$set: payload}}
  }),

  setStatements: (state, payload) => update(state, {
    statements: {$set: payload}
  }),

  addLib: (state, payload) => update(state, {
    details: {libs: {$push: [payload]}}
  }),
  removeLib: (state, payload) => update(state, {
    details: {
      libs: arr => arr.filter(item => item !== payload)
    }
  }),

  setStarred: (state, payload) => update(state, {
    details: {isStarred: {$set: payload}}
  }),
  toggleStarred: func(toggleStarred),
  loadStarred: func(loadStarred),

  setAjax: (state, payload) => update(state, {
    ajax: {$set: payload}
  }),
  resetAjax: (state) => update(state, {
    $unset: ["ajax"]
  }),

  load: func(loadFunction),
  save: func(saveFunction),

}, INITIAL_STATE);

export default currentFunctionReducer;

export {
  DEFAULT_NAME
};