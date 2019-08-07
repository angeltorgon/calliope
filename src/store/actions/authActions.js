import axios from "axios";
import firebase from "../../firebase";

export const SIGN_UP_START = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const authWithGoogle = () => dispatch => {
    var provider = new firebase.auth.GoogleAuthProvider();
    dispatch({ type: SIGN_UP_START });
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            localStorage.setItem("token", user.ra);
            dispatch({ type: SIGN_UP_SUCCESS });
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            dispatch({ type: SIGN_UP_FAILURE });
        });
};

export const signUpWithEmail = credentials => dispatch => {
    const { email, password } = credentials;
    dispatch({ type: SIGN_UP_START });
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            localStorage.setItem("token", res.user.ra);
            dispatch({ type: SIGN_UP_SUCCESS });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: SIGN_UP_FAILURE });
        });
};
export const loginWithEmail = credentials => dispatch => {
    const { email, password } = credentials;
    dispatch({ type: SIGN_UP_START });
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            localStorage.setItem("token", res.user.ra);
            dispatch({ type: SIGN_UP_SUCCESS });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: SIGN_UP_FAILURE });
        });
};
