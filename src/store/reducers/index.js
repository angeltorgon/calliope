import { authReducer } from "./authReducer";
import { formReducer } from "./formReducer";

import { combineReducers } from "redux";

export default combineReducers({
    authReducer,
    formReducer
});
