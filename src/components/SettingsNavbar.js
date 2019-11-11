import React from "react";
import colors from "../helpers/colorPalette";
import { connect } from "react-redux";
import { authWithGoogle } from "../store/actions";
import { withRouter } from "react-router-dom";
import useStyles from "./styles/_searchNavbar";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
    const classes = useStyles();

    const goBack = e => {
        props.history.goBack()
    };

    if (!props.user) return null;

    return (
        <div className={classes.nav}>
            <div onClick={goBack}>
                <FontAwesomeIcon className={classes.backButton} icon={faAngleLeft} size="3x" color={colors.primary} />
            </div>
        </div>
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
