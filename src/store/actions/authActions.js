import Firebase from "../../firebase";

export const AUTH_START = "SIGN_UP";
export const AUTH_SUCCESS = "SIGN_UP_SUCCESS";
export const AUTH_FAILURE = "SIGN_UP_FAILURE";
export const CHECKING_USER = "CHECKING_USER";
export const USER = "USER";
export const NO_USER = "NO_USER";
export const GOT_USER = "GOT_USER";

const Users = Firebase.Users;


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

export const signupWithGoogle = () => dispatch => {
    dispatch({ type: AUTH_START });
    Firebase.authWithGoogle()
};

export const signupWithEmail = user => dispatch => {
    dispatch({ type: AUTH_START });
    const { email, password } = user;
    Firebase.registerWithEmail(email, password)
        .then(res => {
            localStorage.setItem("token", res.user.ra);
            delete user.confirmPassword;
            delete user.password;
            Users.add({ ...user }).then(response => {
                dispatch({ type: AUTH_SUCCESS });
                Users
                    .where("uid", "==", res.user.uid)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach(function (doc) {
                            console.log(doc.data());
                            dispatch({ type: "GOT_USER", payload: doc.data() })
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                    })
            }).catch((error) => {
                dispatch({ type: AUTH_FAILURE, payload: error.message });
                console.error(error);
            });
        })
        .catch(error => {
            console.error(error);
            dispatch({ type: AUTH_FAILURE, payload: error.message });
        })
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

export const checkingUser = () => dispatch => {
    dispatch({ type: CHECKING_USER });
};

export const loggedIn = (user) => dispatch => {
    dispatch({ type: USER });
    if (localStorage.getItem("username") && localStorage.getItem("fullName")) {
        const userInfo = {
            username: localStorage.getItem("username"),
            fullName: localStorage.getItem("fullName"),
        }
        Users.add({ ...userInfo, uid: user.uid, email: user.email }).then(res => {
            localStorage.removeItem("username");
            localStorage.removeItem("fullName");
            dispatch({ type: AUTH_SUCCESS });
        }).catch((error) => {
            dispatch({ type: AUTH_FAILURE, payload: error.message });
            console.error(error);
        });
    };
};

export const loggedOut = () => dispatch => {
    dispatch({ type: NO_USER });
};
