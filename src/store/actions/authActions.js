import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const INVALID_CREDENTIALS = 'INVALID_CREDENTIALS';
export const PROVIDE_CREDENTIALS = 'PROVIDE_CREDENTIALS';
export const LOG_OUT = 'LOG_OUT';

export const signUp = (userInfo) => dispatch => {
    dispatch({ type: SIGN_UP })
    axios
        .post('http://localhost:4000/api/auth/signup',
            userInfo)
        .then(res => {
            dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
}

export const logIn = (credentials) => dispatch => {
    dispatch({ type: LOG_IN });
    axios
        .post('http://localhost:4000/api/auth/login',
            credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user.id);
            dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: INVALID_CREDENTIALS })
        })
}

export const logOut = () => {
    localStorage.removeItem('token');
    return {
        type: LOG_OUT
    }
}

export const provideCredentials = () => {
    return {
        type: PROVIDE_CREDENTIALS
    }
}