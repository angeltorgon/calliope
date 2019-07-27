import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";
import { Card, Container, Divider, TextField, makeStyles } from "@material-ui/core";

import { signUp } from "../store/actions";

const currencies = [
    {
        value: "USD",
        label: "$"
    },
    {
        value: "EUR",
        label: "€"
    },
    {
        value: "BTC",
        label: "฿"
    },
    {
        value: "JPY",
        label: "¥"
    }
];

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: 200
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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [credentials, setCredentials] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

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

        if (firstName && lastName && username && email && password) {
            if (password === confirmPassword) {
                props.signUp({
                    firstName,
                    lastName,
                    username,
                    email,
                    password,
                    avatar: `https://api.adorable.io/avatars/200/${username}`
                });
                setCredentials(true);
            } else {
                setPasswordsMatch(false);
                setCredentials(true);
            }
        } else {
            setCredentials(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Card>
                <p>Sign up with the following</p>
                <Divider variant="middle" />
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange("name")}
                    margin="normal"
                    variant="outlined"
                />
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
