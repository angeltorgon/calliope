import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    LOG_IN,
    LOG_IN_SUCCESS,
    INVALID_CREDENTIALS,
    PROVIDE_CREDENTIALS,
    LOG_OUT,
    FETCH_POEMS,
    FETCH_POEMS_SUCCESS,
    LIKE,
    LIKE_SUCCESS,
    DISLIKE
} from '../actions';

const initialState = {
    user: {},
    poems: [],
    loggingIn: false,
    signingUp: false,
    isSignedUp: false,
    isLoggedIn: false,
    isFetchingPoems: false,
    validCredentials: true, 
    token: localStorage.getItem('token'),
}

export const authReducer = (state = initialState, action ) => 
{
    console.log(action.type, action.payload)
    switch (action.type) {
        case SIGN_UP:
            return {...state, signingUp: true};
        case SIGN_UP_SUCCESS:
            return {...state, isSignedUp: true, signingUp: false};
            case LOG_IN:
                return {
                    ...state, 
                    loggingIn: true,
                    isSignedUp: false,
                    validCredentials: true,
                }
            case INVALID_CREDENTIALS:
                return {
                    ...state, 
                    loggingIn: false,
                    validCredentials: false,
                }
            case PROVIDE_CREDENTIALS:
                return {
                    ...state, 
                    validCredentials: true,
                }
            case LOG_IN_SUCCESS:
            return {
                ...state, 
                loggingIn: false, 
                isLoggedIn: true,
                passwordsMatch: true,
                isSignedUp: false,
                validCredentials: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case LOG_OUT:
        return {
            ...state, 
            isLoggedIn: false,
            poems: [],
        }
        case FETCH_POEMS: 
            return {...state, isFetchingPoems: true}
        case FETCH_POEMS_SUCCESS: 
            return {...state,isFetchingPoems: false, poems: action.payload};
        case LIKE:
            return {...state}
        case LIKE_SUCCESS:
            return {...state}
        default:
            return state
    }
}