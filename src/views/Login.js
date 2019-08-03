// React
import React from "react";

import { connect } from "react-redux";
import LoginModal from "../components/modals/LoginModal";

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

function Login() {
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
                <LoginModal />
            </Card>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
    
    };
};

export default connect(
    mapStateToProps
)(Login);
