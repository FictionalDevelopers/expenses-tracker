import * as types from "./types";
import createReducer from "../utils/createReducer";

const initialState = {
    isLoggedIn: false,
};

const onSignIn = {
    [types.SIGN_IN] : (state, action) => {
        return {
            ...state,
            isLoggedIn: true,
        };
    },
};

const onLogOut = {
    [types.LOG_OUT] : (state, action) => {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
};

const handlers = {
    onSignIn,
    onLogOut,
};

const authReducer = createReducer(initialState, handlers)

export default authReducer;
