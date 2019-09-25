import * as types from './types';
import createReducer from '../utils/createReducer';

const initialState = {
  isLoggedIn: false,
};

const onSignIn = state => ({
  ...state,
  isLoggedIn: true,
});

const onLogOut = state => ({
  ...state,
  isLoggedIn: false,
});

const handlers = {
  [types.SIGN_IN]: onSignIn,
  [types.LOG_OUT]: onLogOut,
};

export default createReducer(initialState, handlers);
