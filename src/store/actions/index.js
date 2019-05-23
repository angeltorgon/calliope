import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const INVALID_CREDENTIALS = 'INVALID_CREDENTIALS';
export const PROVIDE_CREDENTIALS = 'PROVIDE_CREDENTIALS';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_POEMS = 'FETCH_POEMS';
export const FETCH_POEMS_SUCCESS = 'FETCHFETCH_POEMS_SUCCESSED_POEMS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const LIKE = 'LIKE';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const DISLIKE = 'DISLIKE';
export const DISLIKE_SUCCESS = 'DISLIKE_SUCCESS';

// export const sayHello = () => dispatch => {
//     dispatch({type: SIGN_UP});
// }

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

export const fetchPoems = () => dispatch => {
    const token = localStorage.getItem('token');
    dispatch({ type: FETCH_POEMS });
    axios
        .get('http://localhost:4000/api/poems', { headers: { Authorization: token } })
        .then(res => {
            dispatch({ type: FETCH_POEMS_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
}

export const fetchUser = () => dispatch => {
    const token = localStorage.getItem('token');
    const id = 'hello';
    dispatch({ type: FETCH_USER });
    axios
        .get(`http://localhost:4000/api/users/${id}`, { headers: { Authorization: token } })
        .then(res => {
            dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
}

export const like = (poem) => dispatch => {
    delete poem.comments;
    const token = localStorage.getItem('token');
    dispatch({ type: LIKE });
    axios
        .put(`http://localhost:4000/api/poems/${poem.id}`, poem, {
            headers: { Authorization: token }
        })
        .then(res => {
            console.log(res)
            dispatch({ type: LIKE_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
}

export const dislike = (poem) => dispatch => {
    delete poem.comments;
    const token = localStorage.getItem('token');
    dispatch({ type: DISLIKE });
    axios
        .put(`http://localhost:4000/api/poems/${poem.id}`, poem, {
            headers: { Authorization: token }
        })
        .then(res => {
            console.log(res)
            dispatch({ type: DISLIKE_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
}
