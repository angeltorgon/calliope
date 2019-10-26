import {
    GOT_USER
} from "../actions";

const initialState = {
    user: {}
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_USER:
            return { user: action.payload }
        default:
            return state;
    }
};
