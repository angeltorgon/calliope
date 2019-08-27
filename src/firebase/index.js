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

    firebaseAuth = firebase.auth();

    authWithGoogle = () => this.firebaseAuth.signInWithPopup(this.provider);

    registerWithGoogle = () => this.firebaseAuth.sign;

    registerWithEmail = (email, password) =>
        this.firebaseAuth.createUserWithEmailAndPassword(email, password);

    loginWithEmail = (email, password) =>
        this.firebaseAuth.signInWithEmailAndPassword(email, password);

    // checkUser = () => this.firebaseAuth.currentUser;
    checkUser = () => Firebase.firebaseAuth.currentUser;

    signout = () => this.firebaseAuth.signOut();

    db = firebase.firestore().collection("users");

    addUser = (user) => {
        console.log("user at index", user);
        return this.db.where("email", "==", user.email).get();
    };
}

const Firebase = new FirebaseClass();

export default Firebase;
