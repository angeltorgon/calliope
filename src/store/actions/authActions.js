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
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            localStorage.setItem("token", user.ra);
            dispatch({ type: SIGN_UP_SUCCESS });
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
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
