// React
import React, { useState } from "react";

import { connect } from "react-redux";
import { authWithGoogle } from "../store/actions";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import { loginWithEmail } from "../store/actions"

import {
    Card,
    Divider,
} from "@material-ui/core";

function Login(props) {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const onSubmit = () => {
        const { email, password } = inputs;
        props.loginWithEmail(email, password);
    };

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color="#DA6991" height={80} width={80} />
                ) : (
                        <>
                            <img className={classes.logo} src="https://lh3.googleusercontent.com/4yzfGFO-O9K2tSkTJmn3KqpMxTpN91VfGs45V0vQFtUjRTwIKuwV-g1p6aIqPTA0jUmd1Cz0A0g44n-XXZ1RzktF5dKfcJOWn6iO2VRalDLwqOVKfS4FoIRaz3Nxn-F3AbtCIWZ5ndsfCKpPJGlB2HYuJUwTgcMW6I4wQo3b0-mTRiamTQV1NWDB_8bK8m9bFrBvB9Bd0u4AGFh6e3tiglZLdjj79OhfjiqJoPrhSJJu7uor1c7GEK3L0ik3gzuuega_Ql1907vGTNoHD_n_mxsSwTiBNF4Qf4bDbJj0oCkCFbpVWz-kjYzSNJW3jUDvZtbmCwKGC-hqw5kPEKX_b4CST-TCmKotLe84K598KgMJR7Hglk4KQUmtVM6nN1OD-BNWNbfUT7GAM_f6mgY6g_TbcXc6Mh-owtrrIkCSx4WBmEbxtc4Hy4ea0AYqEOKowyS9eI-c1UrwXqPRUXwc2j1KOp5xttXg4V4eXYHtG1IDHBias_Kcb7TfMZGaFRdU5fCuweXlQm1z9FyYzrH0P0mwNseNdRuJd5gTYBiC5Nu9o7l47aleDeCzj2qnPR_4oX9W3SYV0N61EnjBRElFjqtv6ha69TEjhlWi29NpF9Y02oYLWrzZSFgOoGt47FtT5O1myIrUNgbRjbu_B2OovmYa5Uc-nHJHSvRj8rBiKPhHeJixcxP_jKg=w361-h162-no"></img>
                            <p>Login with the following</p>
                            <Divider variant="middle" />
                            <button
                                className={classes.button}
                                onClick={props.authWithGoogle}
                            >
                                Login with Google
                            </button>
                            OR
                            <form className={classes.loginForm} onSubmit={onSubmit}>
                                <input className={classes.formInput} type="email" name="email" placeholder="Email" value={inputs.email} onChange={onChange} />
                                <input className={classes.formInput} type="password" name="password" placeholder="Password" value={inputs.password} onChange={onChange} />
                                <button className={classes.button}>Login</button>
                            </form>
                            <p className={classes.error}>{props.error}</p>
                            <p>Don't have an account? <Link to="/">Signup</Link></p>
                        </>
                    )}
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    const { user, started, finished, error } = state.authReducer;
    return {
        started: started,
        finished: finished,
        error: error,
        user: user
    };
};

export default connect(
    mapStateToProps,
    { authWithGoogle, loginWithEmail }
)(Login);
