// React
import React, { useState } from "react";

import { connect } from "react-redux";
import { authWithGoogle } from "../store/actions";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import { loginWithEmail } from "../store/actions"

import {
    Card,
    Divider,
} from "@material-ui/core";

function Login(props) {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const onSubmit = () => {
        const { email, password } = inputs;
        props.loginWithEmail(email, password);
    };

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#DA6991" height={80} width={80} />
                ) : (
                        <>
                            <img className={classes.logo} src={require("../images/calliope-logo.png")}></img>
                            <p>Login with the following</p>
                            <Divider variant="middle" />
                            <button
                                className={classes.button}
                                onClick={props.authWithGoogle}
                            >
                                Login with Google
                            </button>
                            OR
                            <form className={classes.loginForm} onSubmit={onSubmit}>
                                <input className={classes.formInput} type="email" name="email" placeholder="Email" value={inputs.email} onChange={onChange} />
                                <input className={classes.formInput} type="password" name="password" placeholder="Password" value={inputs.password} onChange={onChange} />
                                <button className={classes.button}>Login</button>
                            </form>
                            <p className={classes.error}>{props.error}</p>
                            <p>Don't have an account? <Link to="/">Signup</Link></p>
                        </>
                    )}
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    const { user, started, finished, error } = state.authReducer;
    return {
        started: started,
        finished: finished,
        error: error,
        user: user
    };
};

export default connect(
    mapStateToProps,
    { authWithGoogle, loginWithEmail }
)(Login);
