import {
    SIGN_UP,
    LOG_IN
} from '../actions';

import { poems } from './dummy-poems';

const initialState = {
    poems: poems,
    isLoggedIn: false
}

export const authReducer = (state = initialState, action ) => {
    console.log(state)
    switch (action.type) {
        case SIGN_UP:
            return {greeting: "hello"};
        case LOG_IN:
            return {...state, isLoggedIn: true}
        default:
            return state
    }
}