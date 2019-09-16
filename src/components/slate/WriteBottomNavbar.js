import React from "react";
import { connect } from "react-redux";
import { authWithGoogle } from "../../store/actions";
import { withRouter } from "react-router-dom";
import useStyles from "./styles/_writeBottomNav";
import { Button } from "@material-ui/core";

function Navbar(props) {
    const classes = useStyles();

    const goBack = e => {
        props.history.goBack()
    };

    return (
        <div className={classes.nav}>
            <i class="fas fa-bold"></i>
        </div>
    )
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
