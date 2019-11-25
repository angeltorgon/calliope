import Firebase from "../../firebase";
const Users = Firebase.Users;

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const getUserByUsername = (username = "hellohello") => dispatch => {
    dispatch({ type: GET_USER_START   });
    Users.where('username', "==", username)
    .get()
    .then((snapShot) => {
        console.log(snapShot)
    })
};