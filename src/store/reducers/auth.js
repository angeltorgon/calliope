import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    LOG_IN,
    LOG_IN_SUCCESS,
    INVALID_CREDENTIALS,
    LOG_OUT,
    FETCH_POEMS,
    FETCH_POEMS_SUCCESS
} from '../actions';

import { poems } from './dummy-poems';

const initialState = {
    user: {},
    poems: [],
    loggingIn: false,
    signingUp: false,
    isSignedUp: false,
    isLoggedIn: false,
    isFetchingPoems: false,
    token: ""
}

export const authReducer = (state = initialState, action ) => {
    console.log(action)
    switch (action.type) {
        case SIGN_UP:
            return {...state, signingUp: true};
        case SIGN_UP_SUCCESS:
            return {...state, isSignedUp: true, signingUp: false};
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
        case LOG_OUT:
        return {...state, isLoggedIn: false}
        case FETCH_POEMS: 
            return {...state, isFetchingPoems: true}
        case FETCH_POEMS_SUCCESS: 
            return {...state,isFetchingPoems: false, poems: action.payload}
        default:
            return state
    }
}