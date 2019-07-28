// React
import React from "react";

import { connect } from "react-redux";

// Store
import { login, provideCredentials } from "../store/actions";

import SignupModal from "../components/modals/SignupModal";

import {
    Card,
    Container,
    Divider,
    Button,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: "100%"
    },
    button: {
        width: "90%",
        height: "40px",
        margin: "10px",
        fontSize: "1.2rem"
    },
    card: {
        marginTop: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px"
    }
}));

function Login(props) {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Card className={classes.card}>
                <p>Login with the following</p>
                <Divider variant="middle" />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Login with Google
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Login with Email
                </Button>
                <SignupModal />
            </Card>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        loggingIn: state.authReducer.loggingIn,
        isLoggedIn: state.authReducer.isLoggedIn,
        token: state.authReducer.token,
        isSignedUp: state.authReducer.isSignedUp,
        validCredentials: state.authReducer.validCredentials
    };
};

export default connect(
    mapStateToProps,
    { login, provideCredentials }
)(Login);
