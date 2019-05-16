import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOGGING_IN = 'LOGGING_IN';
export const INVALID_CREDENTIALS = 'INVALID_CREDENTIALS';
export const FETCHING_POEMS = 'FETCHING_POEMS';
export const FETCHED_POEMS = 'FETCHED_POEMS';

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
    dispatch({type: LOGGING_IN});
    axios
    .post('http://localhost:4000/api/auth/login', 
    credentials)
    .then( res => {
        if(!res.data.token) {
            dispatch({type: INVALID_CREDENTIALS})
        } else {
            dispatch({type: LOG_IN, payload: res.data})
        }
    })
    .catch( err => console.log(err))
}

export const fetchPoems = () => dispatch => {
    dispatch({type: FETCHING_POEMS});
    axios
    .get('http://localhost:4000/api/poems', {headers: {Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpY2siLCJpYXQiOjE1NTgwMzA5ODIsImV4cCI6MTU1ODAzODE4Mn0.Q-VP-rdtaJkaX-2eNmPUzLFM8iFt9PwwJavwSa6sAEU"}})
    .then( res => {
        console.log(res.data);
        dispatch({type:FETCHED_POEMS, payload: res.data})
    })
    .catch( err => console.log(err))
}
