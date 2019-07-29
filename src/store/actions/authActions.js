import axios from "axios";
import firebase from "../../firebase";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN = "LOG_IN";
export const INVALID_CREDENTIALS = "INVALID_CREDENTIALS";
export const PROVIDE_CREDENTIALS = "PROVIDE_CREDENTIALS";
export const LOG_OUT = "LOG_OUT";

const api = "https://calliope-api.herokuapp.com";

var provider = new firebase.auth.GoogleAuthProvider();

export const signup = userInfo => dispatch => {
    console.log("signing up...");
    firebase
        .auth()
        .signInWithRedirect(provider)
        .then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log("token", token);
            console.log("user", user);
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
        });
};

export const login = credentials => dispatch => {
    const { email, password } = credentials;
    dispatch({ type: LOG_IN });
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    firebase
        .auth()
        .post(`${api}/api/auth/login`, credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.user.id);
            localStorage.setItem("username", res.data.user.username);
            localStorage.setItem("avatar", res.data.user.avatar);
            dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: INVALID_CREDENTIALS });
        });
};

export const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("avatar");
    return {
        type: LOG_OUT
    };
};

export const provideCredentials = () => {
    return {
        type: PROVIDE_CREDENTIALS
    };
};
