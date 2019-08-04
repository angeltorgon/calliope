import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        padding: "0 30px"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

function Nav(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.nav}>
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                        Calliope
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(Nav);
