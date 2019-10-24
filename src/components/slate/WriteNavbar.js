import React from "react";
import { connect } from "react-redux";
import { authWithGoogle } from "../../store/actions";
import { withRouter } from "react-router-dom";
import useStyles from "./styles/_writeNavbar";
import { Button } from "@material-ui/core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../helpers/colorPalette";

function Navbar(props) {
    const classes = useStyles();

    const goBack = e => {
        props.history.goBack()
    };

    return (
        <>
            {props.user ? (
                <div className={classes.nav}>
                    <div onClick={goBack}>
                        <FontAwesomeIcon className={classes.backButton} icon={faAngleLeft} size="3x" color={colors.primary} />
                    </div>
                    <div className={classes.linkContainer}>
                        <Button className={classes.saveButton}>Save</Button>
                        <Button onClick={props.handleSubmit} className={classes.publishButton}>Publish</Button>
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
