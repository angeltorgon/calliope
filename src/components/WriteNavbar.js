import React from "react";
import { connect } from "react-redux";
import { authWithGoogle } from "../store/actions";
import { withRouter } from "react-router-dom";
import useStyles from "./styles/_writeNavbar";
import { Button } from "@material-ui/core";

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
                        <svg className={classes.backButton} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="48" height="48"
                            viewBox="0 0 172 172"
                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#de6998"><g id="surface1"><path d="M116.45833,9.63021l-64.5,71.66667l-4.25521,4.70313l4.25521,4.70313l64.5,71.66667l10.75,-9.40625l-60.24479,-66.96354l60.24479,-66.96354z"></path></g></g></g></svg>
                    </div>
                    <div className={classes.linkContainer}>
                        <Button className={classes.saveButton}>Save</Button>
                        <Button className={classes.publishButton}>Publish</Button>
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
