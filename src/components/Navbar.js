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
