import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';

export const sayHello = () => dispatch => {
    dispatch({type: SIGN_UP});
}

export const signUp = () => dispatch => {
    axios
    .post('')
}