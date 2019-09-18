import * as types from "./types";

export const login = () => dispatch => {
    dispatch({type: types.SIGN_IN})
}

export const logout = () => dispatch => {
    dispatch({type: types.LOG_OUT})
}
