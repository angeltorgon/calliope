import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    nav: {
        background: "linear-gradient(45deg, #232926 30%, #252830 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(5, 5, 5, .3)",
        color: "white",
        padding: "0 30px"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        textDecoration: "none",
        color: "white",
        padding: "10px",
        fontSize: "20px",
        "&:hover": {
            color: "white",
            textDecoration: "none"
        }
    },
    button: {
        fontSize: "20px",
        textDecoration: "none",
        color: "white",
        padding: "10px",
        "&:hover": {
            color: "white",
            textDecoration: "none"
        }
    }
}));

function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.nav}>
                <Toolbar>
                    <Link
                        className={classes.button}
                        to="/"
                        className={classes.title}
                    >
                        Calliope
                    </Link>
                    <Link to="/login" className={classes.button}>
                        Login
                    </Link>
                    <Link to="/signup" className={classes.button}>
                        Signup
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(Navbar);
