import { authReducer } from "./authReducer";
import { formReducer } from "./formReducer";
import { userReducer } from "./userReducer";

import { combineReducers } from "redux";

export default combineReducers({
    authReducer,
    formReducer,
    userReducer,
});
