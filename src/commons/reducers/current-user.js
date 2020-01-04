import { createReducer, func } from 'xreducer';
import axios from 'axios';

function loadUser(actions) {
  return axios.get("user")
    .then(user => {
      const data = user.data;
      actions.set({
        name: data.name,
        login: data.login,
        avatarURL: data.avatar_url,
        profileURL: data.html_url,
      });
    });
}

const currentUserReducer = createReducer({
  set: (state, payload) => payload,
  reset: () => null,

  load: func(loadUser)
});

export default currentUserReducer;