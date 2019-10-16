import {
    USERNAME_AVAILABLE,
    USERNAME_UNAVAILABLE
} from "../actions";

const initialState = {
    usernameAvailable: true,
    email: null,
    username: null,
    password: null,
    confirmPassword: null,
    fullName: null
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERNAME_AVAILABLE:
            return { usernameAvailable: true, username: null }
        case USERNAME_UNAVAILABLE:
            return { ...state, usernameAvailable: false, username: "username is taken *" };
        default:
            return state;
    }
};
