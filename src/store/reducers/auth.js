import {
    SIGN_UP,
    LOG_IN,
    LOG_IN_SUCCESS,
    INVALID_CREDENTIALS,
    FETCH_POEMS,
    FETCH_POEMS_SUCCESS
} from '../actions';

import { poems } from './dummy-poems';

const initialState = {
    user: {},
    poems: [],
    loggingIn: false,
    isLoggedIn: false,
    idFetchingPoems: false,
    token: ""
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SIGN_UP:
            return {greeting: "hello"};
        case LOG_IN:
            return {...state, loggingIn: true}
        case LOG_IN_SUCCESS:
            return {
                ...state, 
                loggingIn: false, 
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case FETCH_POEMS: 
            return {...state, isFetchingPoems: true}
        case FETCH_POEMS_SUCCESS: 
            return {...state, poems: action.payload}
        default:
            return state
    }
}