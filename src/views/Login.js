// React
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { authWithGoogle } from "../store/actions";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";

import {
    Card,
    Container,
    Divider,
    Button,
} from "@material-ui/core";

function Login(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#22223B" height={80} width={80} />
                ) : (
                        <>
                            <h1>Calliope</h1>
                            <p>Login with the following</p>
                            <Divider variant="middle" />
                            <button
                                className={classes.button}
                                onClick={props.authWithGoogle}
                            >
                                Login with Google
                            </button>
                            or
                            <form className={classes.loginForm}>
                                <input className={classes.formInputs} type="email" name="email" placeholder="Email" />
                                <input className={classes.formInputs} type="password" name="password" placeholder="Password" />
                                <button className={classes.button}>Login</button>
                            </form>
                            <hr />
                            <p>Don't have an account? <Link to="/">Signup</Link></p>
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
    { authWithGoogle }
)(Login);
