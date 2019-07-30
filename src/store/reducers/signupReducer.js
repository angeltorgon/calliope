import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../actions";

const initialState = {
    started: false,
    finished: false,
    error: null
};

export const signupReducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case SIGN_UP_START:
            return { ...state, started: true };
        case SIGN_UP_SUCCESS:
            return { ...state, finished: true, started: false };
        case SIGN_UP_FAILURE:
            return { ...state, error: true, started: false };
        default:
            return state;
    }
};
