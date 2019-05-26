import {
    FETCH_USER_POEMS_SUCCESS,
    FETCH_USER,
    FETCH_USER_SUCCESS,
} from '../actions'

const initialState  = {
    userPoems: [],
    allPoems: [],
}


export const poemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_POEMS_SUCCESS:
            return {...state, userPoems: action.payload};
        default:
            return state
    }
}