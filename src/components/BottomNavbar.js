import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { faSearch, faPlusCircle, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../helpers/colorPalette";
import { authWithGoogle } from "../store/actions";
import { withRouter } from "react-router-dom";
import Firebase from "../firebase";
import useStyles from "./styles/_bottomNav"

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
                    <Link to="/search" className={classes.linkPink} >
                        <FontAwesomeIcon icon={faSearch} size="2x" color={colors.primary} />
                    </Link>
                    <Link to="/write" className={classes.linkPink}>
                        <FontAwesomeIcon icon={faPlusCircle} size="2x" color={colors.primary} />
                    </Link>
                    <Link to="/home" className={classes.linkPink} >
                        <FontAwesomeIcon icon={faHome} size="2x" color={colors.primary} />
                    </Link>
                    <Link to="/profile" className={classes.linkPink}>
                        <FontAwesomeIcon icon={faUser} size="2x" color={colors.primary} />
                    </Link>
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
