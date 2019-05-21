import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const PASSWORDS_MUST_MATCH = 'PASSWORDS_MUST_MATCH';
export const INVALID_CREDENTIALS = 'INVALID_CREDENTIALS';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_POEMS = 'FETCH_POEMS';
export const FETCH_POEMS_SUCCESS = 'FETCHFETCH_POEMS_SUCCESSED_POEMS';

// export const sayHello = () => dispatch => {
//     dispatch({type: SIGN_UP});
// }

export const signUp = (userInfo) => dispatch => {
    dispatch({ type: SIGN_UP })
    axios
        .post('http://localhost:4000/api/auth/signup',
            userInfo)
        .then(res => {
            console.log(res)
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
            if (!res.data.token) {
                dispatch({ type: INVALID_CREDENTIALS })
            } else {
                setTimeout(function () {
                    localStorage.setItem('token', res.data.token);
                    dispatch({ type: LOG_IN_SUCCESS, payload: res.data })
                }, 5000);
            }
        })
        .catch(err => console.log(err))
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export const passwordsMustMatch = () => {
    return {
        type: PASSWORDS_MUST_MATCH
    }
}

export const fetchPoems = () => dispatch => {
    const token = localStorage.getItem('token');
    dispatch({ type: FETCH_POEMS });
    axios
        .get('http://localhost:4000/api/poems', { headers: { Authorization: token } })
        .then(res => {
            setTimeout(function () {
                dispatch({ type: FETCH_POEMS_SUCCESS, payload: res.data })
            }, 5000);
        })
        .catch(err => console.log(err))
}
