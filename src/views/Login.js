// React
import React, { useEffect } from "react";

import { connect } from "react-redux";
import LoginModal from "../components/modals/LoginModal";
import { authWithGoogle } from "../store/actions";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";

import {
    Card,
    Container,
    Divider,
    Button,
} from "@material-ui/core";

function Login(props) {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <p>hello</p>
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#22223B" height={80} width={80} />
                ) : (
                        <>
                            <p>Login with the following</p>
                            <Divider variant="middle" />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={props.authWithGoogle}
                            >
                                Login with Google
                            </Button>
                            <LoginModal className={classes.emailAuth} />
                        </>
                    )}
            </Card>
        </Container>
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
