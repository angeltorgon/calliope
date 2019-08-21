import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    banner: {
        border: "1px solid red",
        height: "500px",
        margin: "50px 20px",
        
    }
}));

function Landing(props) {
    const classes = useStyles();
    useEffect(() => {}, [props.isLoggedIn]);

    return (
        <div className={classes.banner}>
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default connect(mapStateToProps)(Landing);
