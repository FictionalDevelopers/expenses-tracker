import { combineReducers } from 'redux';
import * as reducers from '../state/reducers';
import authReducer from '../state/auth/reducer';

console.log('reducers', reducers)
const rootReducer = () =>
    combineReducers({
        authReducer,
    });

export default rootReducer;
