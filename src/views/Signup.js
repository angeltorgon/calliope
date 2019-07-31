import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import {
    Card,
    Container,
    Divider,
    Button,
    makeStyles
} from "@material-ui/core";

import SignupModal from "../components/modals/SignupModal";

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

function Signup(props) {
    const classes = useStyles();

    useEffect(() => {
        console.log("started", props.started);
        console.log("finished", props.finished);
        console.log("error", props.error);
        console.log(props)
        props.finished ? props.history.push("/signup") : props.history.push("/signup") 
    }, []);

    return (
        <Container maxWidth="sm">
            <Card className={classes.card}>
              { props.started ? <Loader type="Oval" color="blue" height={80} width={80} />
              : <>
                <p>Signup with the following</p>
                <Divider variant="middle" />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={props.signup}
                >
                    Signup with Google
                </Button>
                <SignupModal />
                </>
                }
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
    { signup }
)(Signup);
