import React from "react";
import { connect } from "react-redux";

import {
    Card,
    Container,
    Divider,
    Button,
    makeStyles
} from "@material-ui/core";

import { signup } from "../store/actions";

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

function Signup(props) {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Card className={classes.card}>
                <p>Sign up with the following</p>
                <Divider variant="middle" />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Signup with Google
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Signup with Email
                </Button>
            </Card>
        </Container>
    );
}

const mapStateToProps = state => ({
    signingUp: state.authReducer.signingUp,
    isSignedUp: state.authReducer.isSignedUp
});

export default connect(
    mapStateToProps,
    {
        signup
    }
)(Signup);
