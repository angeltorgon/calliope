import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";
import {
    Card,
    Container,
    Divider,
    Button,
    makeStyles,
    FormGroup
} from "@material-ui/core";

import { signUp } from "../store/actions";

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
    const [values, setValues] = React.useState({
        name: "Cat in the Hat",
        age: "",
        multiline: "Controlled",
        currency: "EUR"
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (props.isSignedUp) {
            props.history.push("/login");
        } else {
            props.history.push("/signup");
        }
    }, [props.isSignedUp]);

    const handleSubmit = function(e) {
        e.preventDefault();
    };

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
        signUp
    }
)(Signup);
