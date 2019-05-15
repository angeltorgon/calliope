import {
    SIGN_UP,
    LOGGING_IN,
    LOG_IN,
    INVALID_CREDENTIALS
} from '../actions';

import { poems } from './dummy-poems';

const initialState = {
    user: {},
    poems: poems,
    loggingIn: false,
    isLoggedIn: false,
    token: ""
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SIGN_UP:
            return {greeting: "hello"};
        case LOGGING_IN:
            return {...state, loggingIn: true}
        case LOG_IN:
            return {
                ...state, 
                loggingIn: false, 
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            }
        default:
            return state
    }
}