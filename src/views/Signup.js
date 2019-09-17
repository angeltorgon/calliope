import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import Firebase from "../firebase";
import SignupWithEmailForm from "../components/auth/SignupWithGoogleForm"

import {
    Card,
    Divider,
} from "@material-ui/core";

import { authWithGoogle, signupWithEmail } from "../store/actions";

function Signup(props) {
    const classes = useStyles();
    const [signingUp, setSigningUp] = useState(false);

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
                            {
                                signingUp ?
                                    <SignupWithEmailForm signUp={signUp} />
                                    :
                                    <>
                                        <p>Signup with the following</p>
                                        <button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            // onClick={props.authWithGoogle}
                                            onClick={signUp}
                                        >
                                            Signup with Google
                                    </button>
                                        OR
                                    <button
                                            className={classes.button}
                                            onClick={signUp}
                                        >Signup with Email</button>
                                        <p>Already have an account? <Link to="/login">Login</Link></p>
                                    </>
                            }
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
