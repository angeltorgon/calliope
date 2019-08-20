import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { authWithGoogle } from "../store/actions";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    nav: {
        backgroundColor: "#FFFFFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(5, 5, 5, .3)",
        color: "black",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        textDecoration: "none",
        fontFamily: "charcoal",
        color: "white",
        padding: "10px",
        fontSize: "20px",
        height: "100%",
        paddingTop: "18px",
        width: "150px",
        textAlign: "center",
        backgroundColor: "#DA6991",
        "&:hover": {
            color: "white",
            textDecoration: "none",
            backgroundColor: "#DE6998"
        }
    },
    link: {
        fontSize: "20px",
        textDecoration: "none",
        color: "white",
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DA6991",
        "&:hover": {
            textDecoration: "none",
            color: "white",
            textDecoration: "none",
            backgroundColor: "#DE6998"
        }
    },
    linkContainer: {
        height: "100%",
        width: "240px",
        display: "flex"
    },
    linkPink: {
        fontSize: "20px",
        textDecoration: "none",
        color: "black",
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFDAD8",
        "&:hover": {
            backgroundColor: "#FHGAG8",
            color: "black",
            textDecoration: "none"
        },
    }
}));

function Navbar(props) {
    const classes = useStyles();
    const token = localStorage.getItem("token");

    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        props.history.push("/");
    };

    useEffect(() => {
        console.log("props from nav", props);
    }, []);

    return (
        <>
            {token ? (
                <div className={classes.nav}>
                    <Link to="/" className={classes.logo}>
                        Calliope
                    </Link>
                    <div className={classes.linkContainer}>
                        <Link onClick={handleLogout} to="/">
                            Logout
                        </Link>
                    </div>
                </div>
            ) : (
                <div className={classes.nav}>
                    <Link to="/" className={classes.logo}>
                        Calliope
                    </Link>
                    <div className={classes.linkContainer}>
                        <Link to="/login" className={classes.linkPink}>
                            Login
                        </Link>
                        <Link to="/signup" className={classes.link}>
                            Signup
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

const mapStateToProps = state => {
    const { started, finished, error } = state.authReducer;
    return {
        started: started,
        finished: finished,
        error: error
    };
};

export default connect(
    mapStateToProps,
    { authWithGoogle }
)(withRouter(Navbar));
