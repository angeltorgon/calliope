import 'date-fns';
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import Firebase from "../firebase";
import SignupWithGoogleForm from "../components/auth/SignupWithGoogleForm"
import SignupWithEmailForm from "../components/auth/SignupWithEmailForm"
import TextInput from "../components/inputs/TextInput";

import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {
    Card,
    Divider,
    withStyles
} from "@material-ui/core";

import { authWithGoogle, signupWithEmail } from "../store/actions";



function Signup(props) {
    const classes = useStyles();
    const [signingUp, setSigningUp] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => setSelectedDate(date);

    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: ""
    });


    const [error, setError] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [hadError, setHadError] = useState(false);
    const [reachedMaxLength, setReachedMaxLength] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(null);
    const [searchedUsernameAvailable, setSearchedUsernameAvailable] = useState(null);


    const onSubmit = (e) => {
        e.preventDefault();
        props.signupWithEmail(inputs);
    };

    const changeHandler = name => event => {
        setInputs({ ...inputs, [name]: event.target.value });
    };

    const signUp = () => {
        setSigningUp(!signingUp);
    };

    return (
        <div className={classes.container}>
            {/* <Card className={classes.mockup}><img className={classes.mockup} src={require("../images/iphone-x-mockup2.png")} /></Card> */}
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#DA6991" height={80} width={80} />
                ) : (
                        <>
                            <img className={classes.logo} src={require("../images/calliope-logo.png")}></img>
                            <Divider variant="middle" />

                            {signingUp ?
                                <>
                                    <button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        disabled={true}
                                    // onClick={props.authWithGoogle}
                                    // onClick={signUpWithGoogle}
                                    >
                                        Signup with Google
                                </button>
                                    OR
                                    <form className={classes.loginForm} onSubmit={onSubmit}>
                                        <TextInput
                                            className={classes.formInput}
                                            type="password"
                                            name="password"
                                            variant="outlined"
                                            label="Password"
                                            placeholder="Password"
                                            value={inputs.password}
                                            onChange={changeHandler('password')} />
                                        <TextInput
                                            className={classes.formInput}
                                            type="password"
                                            name="confirmPassword"
                                            variant="outlined"
                                            label="Confirm Password"
                                            placeholder="Confirm Password"
                                            value={inputs.confirmPassword}
                                            onChange={changeHandler('confirmPassword')} />
                                        <button className={classes.button} // onClick={signUpWithEmail}
                                        >Signup with Email</button>
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
                                                value={inputs.username}
                                                onChange={changeHandler('username')} />
                                        </div>
                                        <div className={classes.inputContainer}>

                                            <TextInput
                                                className={classes.formInput}
                                                type="text"
                                                name="firstName"
                                                variant="outlined"
                                                label="First Name"
                                                placeholder="First Name"
                                                value={inputs.firstName}
                                                onChange={changeHandler('firstName')} />
                                        </div>
                                        <div className={classes.inputContainer}>

                                            <TextInput
                                                className={classes.formInput}
                                                type="text"
                                                name="lastName"
                                                variant="outlined"
                                                label="Last Name"
                                                placeholder="Last Name"
                                                value={inputs.lastName}
                                                onChange={changeHandler('lastName')} />
                                        </div>
                                    </form>
                                    <button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        // disabled={true}
                                        // onClick={props.authWithGoogle}
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
    return {
        user: user,
        started: started,
        finished: finished,
        error: error
    };
};

export default connect(
    mapStateToProps,
    { authWithGoogle, signupWithEmail }
)(Signup);
