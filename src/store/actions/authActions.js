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
            console.log("token", token);
            console.log("user", user.ra);
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

export const signUpWithEmail = function(credentials) {
    const { email, password } = credentials;
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log("signupwithemail reaponse", res);
        })
        .catch(err => {
            console.log("signupwithemail error", err);
        });
};
