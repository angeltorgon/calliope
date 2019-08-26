import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";

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
            <div className={classes.mockup}></div>
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#22223B" height={80} width={80} />
                ) : (
                        <>
                            <strong>{props.error}</strong>
                            <p>Signup with the following</p>
                            <Divider variant="middle" />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={props.authWithGoogle}
                            >
                                Signup with Google
                            </Button>
                            <form className={classes.loginForm}>
                                <input type="email" name="email" />
                                <input type="text" name="username" />
                                <input type="password" name="password" />
                                <input type="password" name="confirm-password" />
                            </form>
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
