import axios from "axios";
import firebaseAuth from "../../firebase";

export const AUTH_START = "SIGN_UP";
export const AUTH_SUCCESS = "SIGN_UP_SUCCESS";
export const AUTH_FAILURE = "SIGN_UP_FAILURE";

export const authWithGoogle = () => dispatch => {
    // var provider = new firebase.auth.GoogleAuthProvider();
    dispatch({ type: AUTH_START });
    firebaseAuth.loginWithGoogle()
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            localStorage.setItem("token", user.ra);
            dispatch({ type: AUTH_SUCCESS });
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            dispatch({ type: AUTH_FAILURE, payload: errorMessage });
        });
};

export const signUpWithEmail = credentials => dispatch => {
    const { email, password } = credentials;
    dispatch({ type: AUTH_START });
    // firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(res => {
    //         localStorage.setItem("token", res.user.ra);
    //         dispatch({ type: AUTH_SUCCESS });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         dispatch({ type: AUTH_FAILURE, payload: err.message });
    //     });
};
export const loginWithEmail = credentials => dispatch => {
    const { email, password } = credentials;
    dispatch({ type: AUTH_START });
    // firebase
    //     .auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(res => {
    //         localStorage.setItem("token", res.user.ra);
    //         dispatch({ type: AUTH_SUCCESS });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         dispatch({ type: AUTH_FAILURE, payload: err.message });
    //     });
};
