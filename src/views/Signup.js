import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import Firebase from "../firebase";

import {
    Card,
    Divider,
    TextField,
    Input
} from "@material-ui/core";

import { authWithGoogle, signupWithEmail } from "../store/actions";

const db = Firebase.db;

function Signup(props) {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [hadError, setHadError] = useState(false);
    const [reachedMaxLength, setReachedMaxLength] = useState(false);
    const [user, setUser] = useState(null);

    const [usernameAvailable, setUsernameAvailable] = useState(null);
    const [searchedUsernameAvailable, setSearchedUsernameAvailable] = useState(null);

    const authListener = () => {
        Firebase.firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                props.history.push('/home');
            } else {
                props.history.push('/');
            }
        });
    }

    useEffect(() => {
        authListener();
    }, [props.finished]);

    useEffect(() => {
        setInputs({
            email: "",
            username: "",
            password: "",
            confirmPassword: ""
        });
        setPasswordSuccess(false);
        setError(false);
        setHadError(false);
        setSearchedUsernameAvailable(false);
    }, [props.error]);

    const changeHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log("event value", e.target.value)
        if (e.target.name === "confirmPassword") {
            if (e.target.value.length === inputs.password.length) {
                console.log(e.target.value, inputs.password);
                console.log("target inputs password", inputs.password);
                if (e.target.value == inputs.password) {
                    console.log("show success icon");
                    setPasswordSuccess(true);
                    setError(false);
                    setReachedMaxLength(true);
                } else {
                    setError(true);
                    setHadError(true);
                    setPasswordSuccess(false);
                    setReachedMaxLength(true);
                }
            } if (e.target.value.length > inputs.password.length) {
                setError(true);
                setPasswordSuccess(false);
                setHadError(true);
                setReachedMaxLength(true);
                console.log("show error")

            } if (hadError && e.target.value.length < inputs.password.length || reachedMaxLength && e.target.value.length < inputs.password.length) {
                setError(true);
                setPasswordSuccess(false);
                console.log("show error")

            }
        }

        if (e.target.name === "username") {
            Firebase.gatUserByUsername(e.target.value)
                .then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        setSearchedUsernameAvailable(true);
                        setUsernameAvailable(true);
                        console.log("value", e.target.value)
                    } else {
                        setUsernameAvailable(false);
                        setSearchedUsernameAvailable(true);
                    }
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.signupWithEmail(inputs);
    };

    const onFocus = (e) => {
        classes.onFocus = {
            backgroundColor: "blue"
        }
    };

    return (
        <div className={classes.container}>
            {/* <div className={classes.mockup}><img className={classes.mockup} src="https://images.unsplash.com/photo-1485359466996-ba9d9b4958b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></div> */}
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#DA6991" height={80} width={80} />
                ) : (
                        <>
                            <h1>Calliope</h1>
                            <p>Signup with the following</p>
                            <Divider variant="middle" />
                            <button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={props.authWithGoogle}
                            >
                                Signup with Google
                            </button>
                            OR
                            <form className={classes.loginForm} onSubmit={onSubmit}>
                                <input onFocus={onFocus} className={classes.formInput} type="email" name="email" placeholder="Email" value={inputs.email} onChange={changeHandler} />
                                <div className={classes.inputContainer}>

                                    <input className={classes.formInput} type="text" name="username" placeholder="Username" value={inputs.username} onChange={changeHandler} />
                                    {/* <div className={classes.inputError}>x</div> */}
                                    {usernameAvailable && searchedUsernameAvailable ?
                                        (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            className={classes.inputSuccess}
                                            width="50" height="50"
                                            viewBox="0 0 172 172"
                                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M86,6.88c-43.62952,0 -79.12,35.49048 -79.12,79.12c0,43.62952 35.49048,79.12 79.12,79.12c43.62952,0 79.12,-35.49048 79.12,-79.12c0,-15.6864 -4.60863,-30.30871 -12.51031,-42.61703l-4.70984,5.56313c6.5188,10.84976 10.34015,23.5003 10.34015,37.0539c0,39.83176 -32.40824,72.24 -72.24,72.24c-39.83176,0 -72.24,-32.40824 -72.24,-72.24c0,-39.83176 32.40824,-72.24 72.24,-72.24c18.72392,0 35.75504,7.22319 48.60344,18.95359l4.50156,-5.31453c-14.0524,-12.7452 -32.6886,-20.51906 -53.105,-20.51906zM148.73297,26.67344l-66.4686,78.43469l-27.97687,-26.09563l-4.68969,5.03235l33.25109,31.01375l71.13813,-83.93735z"></path></g></g></svg>)
                                        : null}

                                    {!usernameAvailable && searchedUsernameAvailable ?
                                        (<svg className={classes.inputError} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" z="10px"
                                            width="50" height="50"
                                            viewBox="0 0 172 172"
                                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c"><path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM60.29406,55.04l20.94234,30.76515l-21.19765,31.15485h8.75453l16.5214,-24.41594h0.68531l16.22578,24.41594h9.26515l-20.98265,-30.80547l21.45297,-31.11453h-8.79485l-16.56172,24.63094h-0.69203l-16.3064,-24.63094z"></path></g></g></svg>) : null}
                                </div>

                                <input className={classes.formInput} type="password" name="password" placeholder="Password" value={inputs.password} onChange={changeHandler} />
                                <div className={classes.inputContainer}>
                                    <input className={classes.formInput} type="password" name="confirmPassword" placeholder="Confirm Password" value={inputs.confirmPassword} onChange={changeHandler} />
                                    {/* <div className={classes.inputError}>x</div> */}
                                    {passwordSuccess ?
                                        (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            className={classes.inputSuccess}
                                            width="50" height="50"
                                            viewBox="0 0 172 172"
                                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M86,6.88c-43.62952,0 -79.12,35.49048 -79.12,79.12c0,43.62952 35.49048,79.12 79.12,79.12c43.62952,0 79.12,-35.49048 79.12,-79.12c0,-15.6864 -4.60863,-30.30871 -12.51031,-42.61703l-4.70984,5.56313c6.5188,10.84976 10.34015,23.5003 10.34015,37.0539c0,39.83176 -32.40824,72.24 -72.24,72.24c-39.83176,0 -72.24,-32.40824 -72.24,-72.24c0,-39.83176 32.40824,-72.24 72.24,-72.24c18.72392,0 35.75504,7.22319 48.60344,18.95359l4.50156,-5.31453c-14.0524,-12.7452 -32.6886,-20.51906 -53.105,-20.51906zM148.73297,26.67344l-66.4686,78.43469l-27.97687,-26.09563l-4.68969,5.03235l33.25109,31.01375l71.13813,-83.93735z"></path></g></g></svg>)
                                        : null}

                                    {error ?
                                        (<svg className={classes.inputError} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" z="10px"
                                            width="50" height="50"
                                            viewBox="0 0 172 172"
                                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c"><path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM60.29406,55.04l20.94234,30.76515l-21.19765,31.15485h8.75453l16.5214,-24.41594h0.68531l16.22578,24.41594h9.26515l-20.98265,-30.80547l21.45297,-31.11453h-8.79485l-16.56172,24.63094h-0.69203l-16.3064,-24.63094z"></path></g></g></svg>) : null}
                                </div>
                                <button className={classes.button}>Signup</button>
                            </form>
                            <p className={classes.error}>{props.error}</p>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </>
                    )}
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    const { started, finished, error } = state.authReducer;
    return {
        started: started,
        finished: finished,
        error: error
    };
};

export default connect(
    mapStateToProps,
    { authWithGoogle, signupWithEmail }
)(Signup);
