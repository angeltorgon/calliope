import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import Firebase from "../firebase";

import {
    Card,
    Divider,
} from "@material-ui/core";

import { authWithGoogle, signupWithEmail } from "../store/actions";

function Signup(props) {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        if (localStorage.getItem("token")) {
            props.history.push("/home");
        }
    }, [props.finished]);

    useEffect(() => {
        setInputs({
            email: "",
            username: "",
            password: "",
            confirmPassword: ""
        });
    }, [props.error]);

    useEffect(() => {
        if (inputs.password.length < inputs.confirmPassword.length) {
            setError(true);
            if (inputs.password !== inputs.confirmPassword) {
                setError(true);
            } else {
                setError(null);
            }
        }
    }, [inputs.confirmPassword]);

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.signupWithEmail(inputs);
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
                                <input className={classes.formInput} type="email" name="email" placeholder="Email" value={inputs.email} onChange={onChange} />
                                <input className={classes.formInput} type="text" name="username" placeholder="Username" value={inputs.username} onChange={onChange} />
                                <input className={classes.formInput} type="password" name="password" placeholder="Password" value={inputs.password} onChange={onChange} />
                                <div className={classes.formInput}>
                                    <input className={classes.textInput} type="password" name="confirmPassword" placeholder="Confirm Password" value={inputs.confirmPassword} onChange={onChange} />
                                    {/* <div className={classes.inputError}>x</div> */}
                                    {error ? <svg className={classes.inputError} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="50" height="50"
                                        viewBox="0 0 172 172"
                                        style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c"><path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM60.29406,55.04l20.94234,30.76515l-21.19765,31.15485h8.75453l16.5214,-24.41594h0.68531l16.22578,24.41594h9.26515l-20.98265,-30.80547l21.45297,-31.11453h-8.79485l-16.56172,24.63094h-0.69203l-16.3064,-24.63094z"></path></g></g></svg> : null}
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
