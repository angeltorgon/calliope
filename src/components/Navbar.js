import React from "react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authWithGoogle } from "../store/actions";
import { withRouter } from "react-router-dom";
import Firebase from "../firebase";
import useStyles from "./styles/_navbar";
import colors from "../helpers/colorPalette";

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
                    <Link to="/" >
                        <img className={classes.logo} src={require("../images/calliope-logo.png")}></img>
                    </Link>
                    <div className={classes.linkContainer}>
                        <Link
                            to="/"
                            className={classes.linkPink}
                            onClick={handleLogout}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} size="2x" color={colors.primary} />
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
