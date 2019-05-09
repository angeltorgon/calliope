import {
    SAY_HELLO
} from '../actions/auth';

import { poems } from './dummy-poems';

const initialState = {
    poems
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SAY_HELLO:
            return {greeting: "hello"};
        default:
            return {...state}
    }
}