import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';

// export const sayHello = () => dispatch => {
//     dispatch({type: SIGN_UP});
// }

export const signUp = (userInfo) => dispatch => {
    
    axios
    .post('http://localhost:5000/api/auth/signup', 
    {...userInfo})
    .then( res => {
        console.log(res)
        // dispatch({type: SIGN_UP, payload: res})
    })
    .catch( err => console.log(err))
}