import * as types from './types';
import auth from './apis/auth';

export const login = () => ({ type: types.SIGN_IN });

export const logout = () => ({ type: types.LOG_OUT });

export const signUp = formValues => async dispatch => {
  const response = await auth.post('/register', formValues);
  console.log(response);

  dispatch({ type: types.SIGN_UP });
};
