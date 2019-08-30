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
                    <Link to="/" >
                        <img className={classes.logo} src="https://lh3.googleusercontent.com/4yzfGFO-O9K2tSkTJmn3KqpMxTpN91VfGs45V0vQFtUjRTwIKuwV-g1p6aIqPTA0jUmd1Cz0A0g44n-XXZ1RzktF5dKfcJOWn6iO2VRalDLwqOVKfS4FoIRaz3Nxn-F3AbtCIWZ5ndsfCKpPJGlB2HYuJUwTgcMW6I4wQo3b0-mTRiamTQV1NWDB_8bK8m9bFrBvB9Bd0u4AGFh6e3tiglZLdjj79OhfjiqJoPrhSJJu7uor1c7GEK3L0ik3gzuuega_Ql1907vGTNoHD_n_mxsSwTiBNF4Qf4bDbJj0oCkCFbpVWz-kjYzSNJW3jUDvZtbmCwKGC-hqw5kPEKX_b4CST-TCmKotLe84K598KgMJR7Hglk4KQUmtVM6nN1OD-BNWNbfUT7GAM_f6mgY6g_TbcXc6Mh-owtrrIkCSx4WBmEbxtc4Hy4ea0AYqEOKowyS9eI-c1UrwXqPRUXwc2j1KOp5xttXg4V4eXYHtG1IDHBias_Kcb7TfMZGaFRdU5fCuweXlQm1z9FyYzrH0P0mwNseNdRuJd5gTYBiC5Nu9o7l47aleDeCzj2qnPR_4oX9W3SYV0N61EnjBRElFjqtv6ha69TEjhlWi29NpF9Y02oYLWrzZSFgOoGt47FtT5O1myIrUNgbRjbu_B2OovmYa5Uc-nHJHSvRj8rBiKPhHeJixcxP_jKg=w361-h162-no"></img>


                    </Link>
                    <div className={classes.linkContainer}>


                        {/* <Link
                            to="/"
                            className={classes.linkPink}
                            onClick={handleLogout}
                        >
                            <img className={classes.logout} src="https://img.icons8.com/ios/50/000000/user.png" />
                        </Link> */}
                        <Link
                            to="/"
                            className={classes.linkPink}
                            onClick={handleLogout}
                        >
                            {/* <img className={classes.logout} src="https://img.icons8.com/ios/50/000000/exit.png"></img> */}
                            <svg className={classes.logout} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="50" height="50"
                                viewBox="0 0 50 50"
                                style={{ fill: "#DA6991" }}>    <path style={{ lineHeight: "normal", textIndent: 0, textAlign: "start", textDecorationLine: "none", textDecorationStyle: "solid", textDecorationColor: "#FFDAD8", textTransform: "none", blockProgression: "tb", isolation: "auto", mixBlendMode: "normal" }} d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 32.610275 48 39.366605 44.294736 43.550781 38.591797 A 1.0001 1.0001 0 1 0 41.939453 37.408203 C 38.117629 42.617264 31.961725 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 C 31.961725 4 38.117629 7.3827357 41.939453 12.591797 A 1.0001 1.0001 0 1 0 43.550781 11.408203 C 39.366605 5.7052643 32.610275 2 25 2 z M 38.990234 15.990234 A 1.0001 1.0001 0 0 0 38.292969 17.707031 L 44.585938 24 L 23 24 A 1.0001 1.0001 0 1 0 23 26 L 44.585938 26 L 38.292969 32.292969 A 1.0001 1.0001 0 1 0 39.707031 33.707031 L 47.619141 25.794922 A 1.0001 1.0001 0 0 0 47.617188 24.203125 L 39.707031 16.292969 A 1.0001 1.0001 0 0 0 38.990234 15.990234 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"></path></svg>
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
