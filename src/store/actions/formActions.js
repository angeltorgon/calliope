import Firebase from "../../firebase";

export const CHECK_USERNAME_START = "CHECK_USERNAME_START";

const Usernames = Firebase.Usernames;


export const checkUsername = (username) => dispatch => {
    // dispatch({ type: CHECK_USERNAME_START });
    var query = Usernames.where("username", "==", username)
    query.onSnapshot((snapShot) => {
        console.log(snapShot.empty);
    })
    console.log(query, "Here chilling in actions...");
};


checkUsername();