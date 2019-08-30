import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { authWithGoogle } from "../store/actions";
import { withRouter } from "react-router-dom";
import Firebase from "../firebase";
import useStyles from "./styles/_navbar"

function Navbar(props) {
    const classes = useStyles();

    const handleLogout = e => {
        Firebase.signout();
        localStorage.removeItem("token");
        props.history.push("/");
    };

    return (
        <>
            {props.user ? (
                <div className={classes.nav}>
                    <Link to="/" className={classes.logo}>
                        Calliope
                    </Link>
                    <div className={classes.linkContainer}>


                        <Link
                            to="/"
                            className={classes.linkPink}
                            onClick={handleLogout}
                        >
                            <img className={classes.logout} src="https://img.icons8.com/ios/50/000000/user.png" />
                        </Link>
                        <Link
                            to="/"
                            className={classes.linkPink}
                            onClick={handleLogout}
                        >
                            <img className={classes.logout} src="https://img.icons8.com/ios/50/000000/exit.png"></img>
                        </Link>
                    </div>
                </div>
            ) : null}</>
    );
}

const mapStateToProps = state => {
    const { user, started, finished, error } = state.authReducer;
    return {
        user: user,
        started: started,
        finished: finished,
        error: error
    };
};

export default connect(
    mapStateToProps,
    { authWithGoogle }
)(withRouter(Navbar));
