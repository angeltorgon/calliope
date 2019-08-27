import axios from "axios";
import Firebase from "../../firebase";

export const AUTH_START = "SIGN_UP";
export const AUTH_SUCCESS = "SIGN_UP_SUCCESS";
export const AUTH_FAILURE = "SIGN_UP_FAILURE";

const db = Firebase.db;

export const authWithGoogle = () => dispatch => {
    dispatch({ type: AUTH_START });
    Firebase.authWithGoogle()
        .then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            localStorage.setItem("token", user.ra);
            dispatch({ type: AUTH_SUCCESS });
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            dispatch({ type: AUTH_FAILURE, payload: errorMessage });
        });
};

export const signupWithEmail = (user) => dispatch => {
    dispatch({ type: AUTH_START });
    Firebase.addUser(user)
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                const { email, username } = user;
                db.add({ email, username })
                    .then(function (docRef) {
                        const { email, password } = user;
                        Firebase.registerWithEmail(email, password)
                            .then(res => {
                                localStorage.setItem("token", res.user.ra);
                                Firebase.addUser({ email, password });
                                dispatch({ type: AUTH_SUCCESS });
                            })
                            .catch(err => {
                                console.error(err);
                                dispatch({ type: AUTH_FAILURE, payload: err.message });
                            });
                    })
                    .catch(function (error) {
                        console.error(error);
                        return "There was an error. Try again."
                    });
                console.log("I don't exist");
            } else {
                console.log("I exist!");
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                });
                return "This user already exists";
            }
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });


};

export const loginWithEmail = (email, password) => dispatch => {
    dispatch({ type: AUTH_START });
    Firebase.loginWithEmail(email, password)
        .then(res => {
            localStorage.setItem("token", res.user.ra);
            dispatch({ type: AUTH_SUCCESS });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: AUTH_FAILURE, payload: err.message });
        });
};
