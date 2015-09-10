/* jshint esnext: true */

// Login actions for developer
export const LOGIN_DEVELOPER = 'LOGIN_DEVELOPER';
export const LOGIN_DEVELOPER_SUCCESS = 'LOGIN_DEVELOPER_SUCCESS';
export const LOGIN_DEVELOPER_FAILED = 'LOGIN_DEVELOPER_FAILED';

// Login actions for employer
export const LOGIN_EMPLOYER = 'LOGIN_EMPLOYER';
export const LOGIN_EMPLOYER_SUCCESS = 'LOGIN_EMPLOYER_SUCCESS';
export const LOGIN_EMPLOYER_FAILED = 'LOGIN_EMPLOYER_FAILED';

// Logout
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export function loginDeveloper(credentials) {
  return { type: LOGIN_DEVELOPER, credentials };
}

export function loginDeveloperSuccess(developer) {
  return { type: LOGIN_DEVELOPER_SUCCESS, developer };
}

export function loginDeveloperFailed(reason) {
  return { type: LOGIN_DEVELOPER_FAILED, reason };
}
