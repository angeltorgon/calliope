import {
    FETCH_USER_POEMS_SUCCESS,
    ADD_POEM,
    ADD_POEM_SUCCESS
} from '../actions'

const initialState  = {
    userPoems: [],
    allPoems: [],
    addingPoem: false, 
    poemIsAdded: false
}


export const poemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_POEMS_SUCCESS:
            return {...state, userPoems: action.payload};
        case ADD_POEM:
            return {...state, addingPoem: true};
        case ADD_POEM_SUCCESS:
            return {...state, addingPoem: false, poemIsAdded: true};
        default:
            return state
    }
}