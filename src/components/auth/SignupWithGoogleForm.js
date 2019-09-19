import React, { useState } from 'react';
import { signupWithEmail } from '../../store/actions';
import { Link } from 'react-router-dom';
import useStyles from "../../views/styles/_publicRoutes";
import useStyles1 from "./styles/_signupWithGoogleForm";

function signupWithGoogleForm(props) {
    const classes = useStyles();
    const classes1 = useStyles1();
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

    const onFocus = (e) => {
        classes.onFocus = {
            backgroundColor: "blue"
        }
    };
    return (
        <form className={classes.loginForm} onSubmit={onSubmit}>
            <div className={classes.inputContainer}>

                <input className={classes.formInput} type="text" name="username" placeholder="Username" value={inputs.username} onChange={changeHandler} />
            </div>
            <div className={classes.inputContainer}>

                <input className={classes.formInput} type="text" name="bio" placeholder="Bio" value={inputs.username} onChange={changeHandler} />
            </div>
            <div className={classes.inputContainer}>

                <input className={classes.formInput} type="text" name="city" placeholder="City" value={inputs.username} onChange={changeHandler} />
            </div>

            <button
                variant="contained"
                color="primary"
                className={classes.button}
            // onClick={props.authWithGoogle}
            // onClick={signUp}
            >
                Signup with Google
                                    </button>
            <p onClick={props.signUp} className={classes1.goBack}>Go back</p>
        </form>
    )
}

export default signupWithGoogleForm;