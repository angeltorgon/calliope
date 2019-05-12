import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOGGING_IN = 'LOGGING_IN';

// export const sayHello = () => dispatch => {
//     dispatch({type: SIGN_UP});
// }

export const signUp = (userInfo) => dispatch => {
    
    axios
    .post('http://localhost:5000/api/auth/signup', 
    {...userInfo})
    .then( res => {
        console.log(res.data.token)
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
    .post('http://localhost:5000/api/auth/login', 
    credentials)
    .then( res => {
        console.log(res.data.token)
        dispatch({type: LOG_IN, payload: res})
    })
    .catch( err => console.log(err))
}