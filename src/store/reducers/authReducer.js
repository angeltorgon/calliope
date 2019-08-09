import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE } from "../actions";

const initialState = {
    started: false,
    finished: false,
    error: null
};

export const authReducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case AUTH_START:
            return { ...state, started: true };
        case AUTH_SUCCESS:
            return { ...state, finished: true, started: false };
        case AUTH_FAILURE:
            return { ...state, error: true, started: false };
        default:
            return state;
    }
};