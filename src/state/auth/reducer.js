import * as types from "./types";
import { createReducer } from "../utils";

console.log('in reducer')
const initialState = {};

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
    console.log('syka nahuy')
    console.log('action',action)
    switch (action.type) {
        case types.SIGN_IN:
            console.log('reducer reducer')
            return initialState;
        default:
            console.log('reducer reducer11111111111111111111111')
            return state;
    }
}

// export default authReducer;
