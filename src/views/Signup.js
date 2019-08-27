import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";

import {
    Card,
    Container,
    Divider,
    Button
} from "@material-ui/core";

import SignupModal from "../components/modals/SignupModal";

import { authWithGoogle } from "../store/actions";
import Firebase from "../firebase";

function Signup(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {/* <div className={classes.mockup}><img className={classes.mockup} src="https://images.unsplash.com/photo-1485359466996-ba9d9b4958b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></div> */}
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#22223B" height={80} width={80} />
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
                            or
                            <form className={classes.loginForm}>
                                <input className={classes.formInputs} type="email" name="email" placeholder="Email" />
                                <input className={classes.formInputs} type="text" name="username" placeholder="Username" />
                                <input className={classes.formInputs} type="password" name="password" placeholder="Password" />
                                <input className={classes.formInputs} type="password" name="confirm-password" placeholder="Confirm Password" />
                                <button className={classes.button}>SignUp</button>
                            </form>
                            <hr />
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
    { authWithGoogle }
)(Signup);
