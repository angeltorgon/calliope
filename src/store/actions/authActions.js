import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const INVALID_CREDENTIALS = 'INVALID_CREDENTIALS';
export const PROVIDE_CREDENTIALS = 'PROVIDE_CREDENTIALS';
export const LOG_OUT = 'LOG_OUT';

const api = "https://calliope-api.herokuapp.com";

export const signUp = (userInfo) => dispatch => {
    dispatch({ type: SIGN_UP })
    axios
        .post(`${api}/api/auth/signup`,
            userInfo)
        .then(res => {
            dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
}

export const logIn = (credentials) => dispatch => {
    dispatch({ type: LOG_IN });
    axios
        .post(`${api}/api/auth/login`,
            credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user.id);
            localStorage.setItem('username', res.data.user.username);
            localStorage.setItem('avatar', res.data.user.avatar);
            dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: INVALID_CREDENTIALS })
        })
}

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
    return {
        type: LOG_OUT
    }
}

export const provideCredentials = () => {
    return {
        type: PROVIDE_CREDENTIALS
    }
}