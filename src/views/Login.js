// React
import React, { useEffect } from "react";

import { connect } from "react-redux";
import LoginModal from "../components/modals/LoginModal";
import { authWithGoogle } from "../store/actions";

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
        props.finished
            ? props.history.push("/home")
            : props.history.push("/login");
    };

    useEffect(() => {
        handleAuth();
    }, [props.finished]);

    return (
        <Container maxWidth="sm">
            <Card className={classes.card}>
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
            </Card>
        </Container>
    );
}

const mapStateToProps = state => {
    const { started, finished, error } = state.signupReducer;
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
