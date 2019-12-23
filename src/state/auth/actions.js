import { SubmissionError } from 'redux-form';
import * as types from './types';
import auth from './apis/auth';

export const login = () => ({ type: types.SIGN_IN });

export const logout = () => ({ type: types.LOG_OUT });

export const signUp = formValues => async dispatch => {
  try {
    await auth.post('/register', formValues);

    dispatch({ type: types.SIGN_UP });
  } catch (error) {
    throw new SubmissionError({
      email: error.response.data.error,
    });
  }
};
