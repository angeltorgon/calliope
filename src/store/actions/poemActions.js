import axios from 'axios';

export const FETCH_POEMS = 'FETCH_POEMS';
export const FETCH_POEMS_SUCCESS = 'FETCHFETCH_POEMS_SUCCESSED_POEMS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const LIKE = 'LIKE';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const DISLIKE = 'DISLIKE';
export const DISLIKE_SUCCESS = 'DISLIKE_SUCCESS';
export const FETCH_USER_POEMS_SUCCESS = 'FETCH_USER_POEMS_SUCCESS';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_POEM = 'ADD_POEM';
export const ADD_POEM_SUCCESS = 'ADD_POEM_SUCCESS';

const api = "https://calliope-api.herokuapp.com";



export const fetchUserPosts  = (id) => dispatch => {
    const token = localStorage.getItem('token');

    axios
    .get(`${api}/poems/user/${id}`, {
        headers: { Authorization: token }
    })
    .then(res => {
        dispatch({type: FETCH_USER_POEMS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
};

export const fetchPoems = () => dispatch => {
    const token = localStorage.getItem('token');
    dispatch({ type: FETCH_POEMS });
    axios
        .get(`${api}/api/poems`, { headers: { Authorization: token } })
        .then(res => {
            dispatch({ type: FETCH_POEMS_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
}

export const fetchUser = (id) => dispatch => {
    const token = localStorage.getItem('token');
    dispatch({ type: FETCH_USER });
    axios
        .get(`${api}/api/users/${id}`, { headers: { Authorization: token } })
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_USER_SUCCESS, payload: res.data.user });
        })
        .catch(err => console.log(err))
}

export const like = (poem) => dispatch => {
    delete poem.comments;
    const token = localStorage.getItem('token');
    dispatch({ type: LIKE });
    axios
        .put(`${api}/api/poems/${poem.id}`, poem, {
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
        .put(`${api}/api/poems/${poem.id}`, poem, {
            headers: { Authorization: token }
        })
        .then(res => {
            console.log(res)
            dispatch({ type: DISLIKE_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
}

export const postComment = (comment) => dispatch => {
    const token = localStorage.getItem('token');
    axios
        .post(`${api}/api/comments/`, comment, {
            headers: { Authorization: token }
        })
        .then(res => {
            return axios
            .get('http://localhost:4000/api/poems/', 
            { headers: { Authorization: token } })
        })
        .then(res => {
            dispatch({type: ADD_COMMENT_SUCCESS, payload: res.data})
        })
        .catch(err => console.log(err))
}

export const postPoem = (poem) => dispatch => {
    const token = localStorage.getItem('token');
    dispatch({type: ADD_POEM})
    console.log(poem)
    axios
        .post(`${api}api/poems/`, poem, {
            headers: { Authorization: token }
        })
        .then(res => {
            console.log(res);
            dispatch({type: ADD_POEM_SUCCESS})
        })
        .catch(err => console.log(err))
}
