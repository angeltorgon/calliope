import {
    SIGN_UP,
    LOGGING_IN,
    LOG_IN
} from '../actions';

import { poems } from './dummy-poems';

const initialState = {
    poems: poems,
    loggingIn: false,
    isLoggedIn: false
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SIGN_UP:
            return {greeting: "hello"};
        case LOGGING_IN:
            return {...state, loggingIn: true}
        case LOG_IN:
            return {...state, loggingIn: false, isLoggedIn: true}
        default:
            return state
    }
}