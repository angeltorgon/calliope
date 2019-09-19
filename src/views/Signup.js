import 'date-fns';
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import Firebase from "../firebase";
import SignupWithGoogleForm from "../components/auth/SignupWithGoogleForm"
import SignupWithEmailForm from "../components/auth/SignupWithEmailForm"

import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {
    Card,
    Divider,
    TextField,
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
        confirmPassword: ""
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

    const CustomTextInput = withStyles({
        root: {
            '& label.Mui-focused': {
                color: "grey",
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'green',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'lightgrey',
                },
                '&:hover fieldset': {
                    borderColor: 'grey',
                },
                '&.Mui-focused fieldset': {
                    border: ".5px solid grey",
                    backgroundColor: '#fffafc',
                },
            },
        },
    })(TextField);

    const CustomKeyboardDatePicker = withStyles({
        root: {
            '& label.Mui-focused': {
                color: "grey",
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'green',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'lightgrey',
                },
                '&:hover fieldset': {
                    borderColor: 'grey',
                },
                '&.Mui-focused fieldset': {
                    border: ".5px solid grey",
                    backgroundColor: '#fffafc',
                },
            },
        },
    })(KeyboardDatePicker);


    const changeHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log("event value", e.target.value)

        // if (e.target.name === "confirmPassword") {
        //     if (e.target.value.length === inputs.password.length) {
        //         console.log(e.target.value, inputs.password);
        //         console.log("target inputs password", inputs.password);
        //         if (e.target.value == inputs.password) {
        //             console.log("show success icon");
        //             setPasswordSuccess(true);
        //             setError(false);
        //             setReachedMaxLength(true);
        //         } else {
        //             setError(true);
        //             setHadError(true);
        //             setPasswordSuccess(false);
        //             setReachedMaxLength(true);
        //         }
        //     } if (e.target.value.length > inputs.password.length) {
        //         setError(true);
        //         setPasswordSuccess(false);
        //         setHadError(true);
        //         setReachedMaxLength(true);
        //         console.log("show error")

        //     } if (hadError && e.target.value.length < inputs.password.length || reachedMaxLength && e.target.value.length < inputs.password.length) {
        //         setError(true);
        //         setPasswordSuccess(false);
        //         console.log("show error")

        //     }
        // }

        // if (e.target.name === "username") {
        //     Firebase.gatUserByUsername(e.target.value)
        //         .then((querySnapshot) => {
        //             if (querySnapshot.empty) {
        //                 setSearchedUsernameAvailable(true);
        //                 setUsernameAvailable(true);
        //             } else {
        //                 setUsernameAvailable(false);
        //                 setSearchedUsernameAvailable(true);
        //             }
        //         })
        //         .catch(function (error) {
        //             console.log("Error getting documents: ", error);
        //         });
        // }
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
                                        <CustomTextInput
                                            className={classes.formInput}
                                            type="email"
                                            name="email"
                                            variant="outlined"
                                            placeholder="Email"
                                            value={inputs.email}
                                            onChange={changeHandler} />
                                        <CustomTextInput
                                            className={classes.formInput}
                                            type="password"
                                            name="password"
                                            variant="outlined"
                                            placeholder="Password"
                                            value={inputs.password}
                                            onChange={changeHandler} />
                                        <CustomTextInput
                                            className={classes.formInput}
                                            type="password"
                                            name="confirmPassword"
                                            variant="outlined"
                                            placeholder="Confirm Password"
                                            value={inputs.confirmPassword}
                                            onChange={changeHandler} />
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

                                            <CustomTextInput
                                                className={classes.formInput}
                                                label="Username"
                                                type="text"
                                                variant="outlined"
                                                name="username"
                                                value={inputs.username}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className={classes.inputContainer}>

                                            <CustomTextInput 
                                                className={classes.formInput} 
                                                type="text" 
                                                name="firstName" 
                                                variant="outlined"
                                                placeholder="First Name" 
                                                value={inputs.username} 
                                                onChange={changeHandler} />
                                        </div>
                                        <div className={classes.inputContainer}>

                                            <CustomTextInput 
                                                className={classes.formInput} 
                                                type="text" 
                                                name="lastName" 
                                                variant="outlined"
                                                placeholder="Last Name" 
                                                value={inputs.username} 
                                                onChange={changeHandler} />
                                        </div>
                                        <div className={classes.inputContainer}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <CustomKeyboardDatePicker
                                                    disableToolbar
                                                    className={classes.datePicker}
                                                    format="MM/dd/yyyy"
                                                    id="date-picker-inline"
                                                    variant="dialog"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    inputVariant="outlined"
                                                    styles={{ backgroundColor: 'blue' }}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>
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
