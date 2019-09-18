import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import rootReducer from './rootReducer';

const initialState = {
    isLoggedIn: false
};
console.log('rootReducer', rootReducer)
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export const history = createBrowserHistory({ basename: '/' });

export default store;
