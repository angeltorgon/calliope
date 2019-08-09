import { authReducer } from "./authReducer";
import { poemsReducer } from "./poemsReducer";

import { combineReducers } from "redux";

export default combineReducers({
    authReducer,
    poemsReducer
});
