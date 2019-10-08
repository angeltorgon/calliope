import firebase from "firebase";

class FirebaseClass {
    firebaseConfig = {
        apiKey: "AIzaSyAWA4BH7aoYX1-lwUPaNl9xfKCk82Fqv48",
        authDomain: "fir-tutorial-cad7d.firebaseapp.com",
        databaseURL: "https://fir-tutorial-cad7d.firebaseio.com",
        projectId: "fir-tutorial-cad7d",
        storageBucket: "fir-tutorial-cad7d.appspot.com",
        messagingSenderId: "976833235192",
        appId: "1:976833235192:web:ee123d5777eb0ff2"
    };
    provider = new firebase.auth.GoogleAuthProvider();
    firebase = firebase.initializeApp(this.firebaseConfig);
    firebaseAuth = firebase.auth(); // reference to our app
    authWithGoogle = () => this.firebaseAuth.signInWithRedirect(this.provider);
    registerWithEmail = (email, password) =>
        this.firebaseAuth.createUserWithEmailAndPassword(email, password);
    loginWithEmail = (email, password) =>
        this.firebaseAuth.signInWithEmailAndPassword(email, password);
    signout = () => this.firebaseAuth.signOut();
    Usernames = firebase.firestore().collection("usernames");
    Poems = firebase.firestore().collection("poems");
    Users = firebase.firestore().collection("users");
    getUserByUsername = (username) => {
        return this.Usernames.where("username", "==", username).get();
    };
}

const Firebase = new FirebaseClass();

export default Firebase;
