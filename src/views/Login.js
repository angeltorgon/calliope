// React
import React, { useState, useEffect } from "react";

// External Libraries/API's
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import firebase from "../firebase/firebase";

// Store
import { logIn, provideCredentials } from "../store/actions";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [credentials, setCredentials] = useState(true);

    useEffect(() => {
        console.log(props.isLoggedIn);
        if (props.isLoggedIn) {
            props.history.push("/dashboard");
        }
    }, [props.isLoggedIn]);

    const handleSubmit = function(e) {
        e.preventDefault();
        if (email && password) {
            props.logIn({ email, password });
            setCredentials(true);
        } else {
            setCredentials(false);
            props.provideCredentials();
        }
    };
    const login = function(e) {
        e.preventDefault();
        console.log("email", email, password);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="form-container">
            {props.isSignedUp ? (
                <p className="success">
                    Registration Successful! Log in to continue!
                </p>
            ) : null}
            {props.loggingIn ? (
                <Loader
                    type="ThreeDots"
                    color="#AC5D5E"
                    height="50"
                    width="50"
                />
            ) : null}
            <h2>Log In</h2>
            {/* <form className="form" onSubmit={handleSubmit}> */}
            <form>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="email"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="password"
                />
                <button onClick={login}>Log In</button>
                {credentials ? null : <p>Please provide email and password</p>}
                {props.validCredentials ? null : <p> Invalid credentials</p>}
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loggingIn: state.authReducer.loggingIn,
        isLoggedIn: state.authReducer.isLoggedIn,
        token: state.authReducer.token,
        isSignedUp: state.authReducer.isSignedUp,
        validCredentials: state.authReducer.validCredentials
    };
};

export default connect(
    mapStateToProps,
    { logIn, provideCredentials }
)(Login);
