import firebase from "firebase";

class FirebaseAuth {
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

    firebaseAuth = firebase.initializeApp(this.firebaseConfig).auth();

    authWithGoogle = () => this.firebaseAuth.signInWithPopup(this.provider);

    registerWithGoogle = () => this.firebaseAuth.sign;

    registerWithEmail = (email, password) =>
        this.firebaseAuth.createUserWithEmailAndPassword(email, password);

    loginWithEmail = (email, password) =>
        this.firebaseAuth.signInWithEmailAndPassword(email, password);

    checkUserStatus = () => this.firebaseAuth.currentUser;
    
    signout = () => this.firebaseAuth.signOut();
}

const Firebase = new FirebaseAuth();

export default Firebase;
