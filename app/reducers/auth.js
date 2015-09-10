/* jshint esnext: true */
import { combineReducers } from 'redux';
import * as Auth from './../actions/auth';

const initialState = {
  loaded: false
};

function authDeveloper(state=initialState, action={}) {
  /* jshint ignore:start */
  switch (action.type) {
  case Auth.LOGIN_DEVELOPER:
    let res = {
      ...state,
      loggingIn: true
    };
  case Auth.LOGIN_DEVELOPER_SUCCESS:
    return {
      ...state,
      loggingIn: false,
      user: action.result
    };
  case Auth.LOGIN_DEVELOPER_FAILED:
    return {
      ...state,
      loggingIn: false,
      user: null,
      loginError: action.error
    };
  default:
    return state;
  }
  /* jshint ignore:end */
}

function authEmployer(action, state=initialState) {
  return state;
}

const authApp = combineReducers({
  authDeveloper,
  authEmployer
});

export default authApp;
