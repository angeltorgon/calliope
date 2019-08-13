// React
import React, { useEffect } from "react";

import { connect } from "react-redux";
import LoginModal from "../components/modals/LoginModal";
import { authWithGoogle } from "../store/actions";
import Loader from "react-loader-spinner";
import firebase from "../firebase";

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
        width: "100%",
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

    const handleAuth = () => {
        const user = localStorage.getItem("token");
        user ? props.history.push("/home") : props.history.push("/login");
    };

    useEffect(() => {
        console.log("props from login", props);
        handleAuth();
    });

    return (
        <Container maxWidth="sm">
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="blue" height={80} width={80} />
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
                        <LoginModal />
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
