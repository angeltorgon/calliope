import React from "react";
import { connect } from "react-redux";
import { authWithGoogle } from "../../store/actions";
import { withRouter } from "react-router-dom";
import useStyles from "./styles/_writeBottomNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic, faUnderline, faAlignCenter, faAlignLeft, faAlignRight, faPalette, faFill } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@material-ui/core";

function Navbar(props) {
    const classes = useStyles();

    const goBack = e => {
        props.history.goBack()
    };

    return (
        <div className={classes.nav}>
            <i class="fas fa-bold"></i>
            <Button className={classes.iconButton}><FontAwesomeIcon className={classes.icon} icon={faBold} size="2x" ß /></Button>
            <Button className={classes.iconButton}><FontAwesomeIcon className={classes.icon} icon={faItalic} size="2x" /></Button>
            <Button className={classes.iconButton}><FontAwesomeIcon className={classes.icon} icon={faUnderline} size="2x" /></Button>
            <Button className={classes.iconButton}><FontAwesomeIcon className={classes.icon} icon={faAlignLeft} size="2x" /></Button>
            <Button className={classes.iconButton}><FontAwesomeIcon className={classes.icon} icon={faAlignCenter} size="2x" /></Button>
            <Button className={classes.iconButton}><FontAwesomeIcon className={classes.icon} icon={faAlignRight} size="2x" /></Button>
            <Button className={classes.iconButton}><FontAwesomeIcon className={classes.icon} icon={faPalette} size="2x" /></Button>
            <Button className={classes.iconButton}><FontAwesomeIcon className={classes.icon} icon={faFill} size="2x" /></Button>
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
