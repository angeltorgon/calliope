import {
    CHECK_USERNAME_START,
    USERNAME_AVAILABLE,
    USERNAME_UNAVAILABLE
} from "../actions";

const initialState = {
    usernameAvailable: true
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERNAME_AVAILABLE:
            return { ...state, usernameAvailable: true }
        case USERNAME_UNAVAILABLE:
            return { ...state, usernameAvailable: false };
        default:
            return state;
    }
};
