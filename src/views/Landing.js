import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Card, makeStyles } from "@material-ui/core";
import Firebae from "../firebase";

const useStyles = makeStyles(theme => ({
    banner: {
        border: "1px solid red",
        height: "500px",
        margin: "50px 20px"
    }
}));

function Landing(props) {
    const classes = useStyles();
    useEffect(() => {}, [props.isLoggedIn]);

    const checkUser = () => {
        const user = Firebae.checkUser();
        console.log("user", user);
    };

    const signout = () => {
        const user = Firebae.signout();
        console.log("user", user);
    };

    return (
        <div className={classes.banner}>
            <button onClick={checkUser}>Check User</button>
            <button onClick={signout}>Signout User</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default connect(mapStateToProps)(Landing);
