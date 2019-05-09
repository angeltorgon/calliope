import {
    SAY_HELLO
} from '../actions/auth';

import { poems } from '../../context/poem-context';

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