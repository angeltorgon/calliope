import Firebase from "../../firebase";

export const USERNAME_AVAILABLE = "USERNAME_AVAILABLE";
export const USERNAME_UNAVAILABLE = "USERNAME_UNAVAILABLE";

const Usernames = Firebase.Usernames;


export const checkUsername = (username) => dispatch => {
    var query = Usernames.where("username", "==", username)
    query.onSnapshot((snapShot) => {
        snapShot.empty ? dispatch({ type: USERNAME_AVAILABLE }) : dispatch({ type: USERNAME_UNAVAILABLE });
    })
    console.log(query, "Here chilling in actions...");
};

