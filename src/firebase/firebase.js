import firebase from "./firebaseInit.js";

class FirebaseAuth {
    provider = new firebase.auth.GoogleAuthProvider();

    login() {
        firebase.auth().signInWithRedirect(this.provider);
    }
}

export default FirebaseAuth;