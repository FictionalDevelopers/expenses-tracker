import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import { createBrowserHistory } from 'history';
import rootReducer from './rootReducer';

const initialState = {};
console.log('rootReducer', rootReducer)
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware),
);

export const history = createBrowserHistory({ basename: '/' });

export default store;
