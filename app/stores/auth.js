/* jshint esnext: true */
import { createStore } from 'redux';
import authApp from './../reducers/auth';

let authStore = createStore(authApp);

export default authStore;
