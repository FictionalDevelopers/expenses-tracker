import * as types from "./types";
import { createReducer } from "../utils";

console.log('in reducer')
const initialState = {
    isLoggedIn: false,
};

// const authReducer = createReducer(initialState)({
//     [types.SIGN_IN]: (state, action) => {
//         console.log('reducer reducer')
//
//         return {
//             id: 1,
//         };
//     },
//
//     [types.LOG_OUT]: (state, action) => {
//         return initialState;
//     },
// });

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGN_IN:
            console.log('sign in')
            console.log('state', state)
            const c = {
                ...state,
                isLoggedIn: true,
            };
            console.log('c', c)
            return {
                ...state,
                isLoggedIn: true,
            };
        default:
            return state;
    }
}

// export default authReducer;
