import {
    SAY_HELLO
} from '../actions/auth';

const initialState = {
    greeting: ""
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SAY_HELLO:
            return {greeting: "hello"};
        default:
            return {...state}
    }
}