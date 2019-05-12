import {
    SIGN_UP
} from '../actions';

import { poems } from './dummy-poems';

const initialState = {
    poems,
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SIGN_UP:
            return {greeting: "hello"};
        default:
            return {...state}
    }
}