import {
    SAY_HELLO
} from '../actions/auth';

const initialState = {
    gretting: ""
}

export const authReducer = (state = initialState, action ) => {
    console.log(action)
    switch (action.type) {
        case SAY_HELLO:
            return {greeting:"hello"}
    }
}