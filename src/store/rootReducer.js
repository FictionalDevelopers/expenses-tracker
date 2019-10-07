import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import * as reducers from '../state/reducers';

export default combineReducers({ ...reducers, form: FormReducer });
