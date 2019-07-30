import { signupReducer } from './signupReducer';
import { poemsReducer } from './poemsReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    signupReducer,
    poemsReducer
});