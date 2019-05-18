import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
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
            setInterval(function(){ 
                dispatch({type: LOG_IN_SUCCESS, payload: res.data})
            }, 5000);
        }
    })
    .catch( err => console.log(err))
}

export const fetchPoems = () => dispatch => {
    dispatch({type: FETCHING_POEMS});
    axios
    .get('http://localhost:4000/api/poems', {headers: {Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpY2siLCJpYXQiOjE1NTgxNTg3NzQsImV4cCI6MTU1ODE2NTk3NH0.nmvi5NdLia4VMpRf60YIpMIJnchWBDC_Xwnq0YyFwB8"}})
    .then( res => {
        console.log(res.data);
        dispatch({type:FETCHED_POEMS, payload: res.data})
    })
    .catch( err => console.log(err))
}
