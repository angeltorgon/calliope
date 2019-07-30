import axios from "axios";
import firebase from "../../firebase";

export const SIGN_UP_START = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

var provider = new firebase.auth.GoogleAuthProvider();

export const signup = () => dispatch => {
    dispatch({type: SIGN_UP_START})
    firebase
        .auth()
        .signInWithRedirect(provider);
};
