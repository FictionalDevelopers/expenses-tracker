import * as types from "./types";

const initialState = {
    isLoggedIn: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                ...state,
                isLoggedIn: true,
            };
        case types.LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}

// export default authReducer;
