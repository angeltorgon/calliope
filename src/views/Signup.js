import 'date-fns';
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import TextInput from "../components/inputs/TextInput";
import {
    Card,
    Divider,
} from "@material-ui/core";

import { signupWithGoogle, signupWithEmail, checkUsername } from "../store/actions";



function Signup(props) {
    const classes = useStyles();
    const [signingUp, setSigningUp] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        fullName: ""
    });

    const [inputErrors, setInputErrors] = useState({
        email: null,
        username: null,
        password: null,
        confirmPassword: null,
        fullName: null
    });

    useEffect(() => {
        setInputErrors({ ...inputErrors, username: props.usernameError });
        props.usernameAvailable && inputs.fullName.length > 3 ? setDisabled(false) : setDisabled(true);
    });

    const onSubmit = (e) => {
        e.preventDefault();
        props.signupWithEmail(inputs);
    };

    const onChange = (event, name) => {
        setInputs({ ...inputs, [name]: event.target.value });
        props.checkUsername(event.target.value);
    };

    const signUp = () => {
        setSigningUp(!signingUp);
        localStorage.setItem("username", inputs.username);
        localStorage.setItem("fullName", inputs.fullName);
    };

    return (
        <div className={classes.container}>
            {/* <Card className={classes.mockup}><img className={classes.mockup} src={require("../images/iphone-x-mockup2.png")} /></Card> */}
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#DA6991" height={80} width={80} />
                ) : (
                        <>
                            <h1 className={classes.logo}>Calliope</h1>
                            <Divider variant="middle" />

                            {signingUp ?
                                <>
                                    <button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        onClick={props.signupWithGoogle}
                                    >
                                        Signup with Google
                                </button>
                                    OR
                                    <form className={classes.loginForm} onSubmit={onSubmit}>
                                        <TextInput
                                            className={classes.formInput}
                                            type="email"
                                            name="email"
                                            variant="outlined"
                                            label="Email"
                                            placeholder="Email"
                                            value={inputs.email}
                                            onChange={onChange} />
                                        <TextInput
                                            className={classes.formInput}
                                            type="password"
                                            name="password"
                                            variant="outlined"
                                            label="Password"
                                            placeholder="Password"
                                            value={inputs.password}
                                            onChange={onChange} />
                                        <button className={classes.button}>Signup with Email</button>
                                    </form>
                                    <p onClick={signUp}>Go Back</p>
                                </>
                                :
                                <>
                                    <p>Register below!</p>
                                    <form className={classes.loginForm} onSubmit={onSubmit}>
                                        <div className={classes.inputContainer}>

                                            <TextInput
                                                className={classes.formInput}
                                                label="Username"
                                                type="text"
                                                variant="outlined"
                                                name="username"
                                                placeholder="Username"
                                                success={props.usernameAvailable}
                                                value={inputs.username}
                                                onChange={onChange}
                                                error={inputErrors.username} />
                                        </div>
                                        <div className={classes.inputContainer}>

                                            <TextInput
                                                className={classes.formInput}
                                                type="text"
                                                name="fullName"
                                                variant="outlined"
                                                label="Full Name"
                                                placeholder="Full Name"
                                                success={inputs.fullName.length > 3}
                                                value={inputs.fullName}
                                                error={inputErrors.fullName}
                                                onChange={onChange} />
                                        </div>
                                        <div className={classes.inputContainer}>
                                        </div>
                                    </form>
                                    <button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        disabled={disabled}
                                        onClick={signUp}
                                    >
                                        Next
                                    </button>
                                </>
                            }
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                            <p className={classes.error}>{props.error}</p>
                        </>
                    )}
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    const { user, started, finished, error } = state.authReducer;
    const { usernameAvailable, username } = state.formReducer;
    return {
        user: user,
        started: started,
        finished: finished,
        usernameAvailable: usernameAvailable,
        error: error,
        usernameError: username
    };
};

export default connect(
    mapStateToProps,
    {
        signupWithGoogle,
        signupWithEmail,
        checkUsername,
    }
)(Signup);
