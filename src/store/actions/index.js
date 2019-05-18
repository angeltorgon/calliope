import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const INVALID_CREDENTIALS = 'INVALID_CREDENTIALS';
export const FETCH_POEMS = 'FETCH_POEMS';
export const FETCH_POEMS_SUCCESS = 'FETCHFETCH_POEMS_SUCCESSED_POEMS';

// export const sayHello = () => dispatch => {
//     dispatch({type: SIGN_UP});
// }

export const signUp = (userInfo) => dispatch => {
    
    axios
    .post('http://localhost:4000/api/auth/signup', 
    {...userInfo})
    .then( res => {
        console.log(res.data)
        // if (!res.data.token) {
        //     dispatch({type:})
        // }
        // // dispatch({type: SIGN_UP, payload: res})
    })
    .catch( err => console.log(err))
}

export const logIn = (credentials) => dispatch => {
    dispatch({type: LOG_IN});
    axios
    .post('http://localhost:4000/api/auth/login', 
    credentials)
    .then( res => {
        if(!res.data.token) {
            dispatch({type: INVALID_CREDENTIALS})
        } else {
            setInterval(function(){ 
                localStorage.setItem('token', res.data.token);
                dispatch({type: LOG_IN_SUCCESS, payload: res.data})
            }, 5000);
        }
    })
    .catch( err => console.log(err))
}

export const fetchPoems = () => dispatch => {
    const token = localStorage.getItem('token');
    dispatch({type: FETCH_POEMS});
    axios
    .get('http://localhost:4000/api/poems', {headers: {Authorization: token}})
    .then( res => {
        dispatch({type:FETCH_POEMS_SUCCESS, payload: res.data})
    })
    .catch( err => console.log(err))
}
