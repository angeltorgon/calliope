import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE } from "../actions";

const initialState = {
    started: false,
    finished: false,
    error: null
};

export const authReducer = (state = initialState, action) => {
    const errorMessage = action.payload;
    switch (action.type) {
        case AUTH_START:
            return { ...state, started: true };
        case AUTH_SUCCESS:
            return { ...state, finished: true, started: false, error: null };
        case AUTH_FAILURE:
            return { ...state, error: errorMessage, started: false };
        default:
            return state;
    }
};
