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

const onSignUp = state => ({
  ...state,
  isLoggedIn: true,
});

const handlers = {
  [types.SIGN_IN]: onSignIn,
  [types.LOG_OUT]: onLogOut,
  [types.SIGN_UP]: onSignUp,
};

export default createReducer(initialState, handlers);
