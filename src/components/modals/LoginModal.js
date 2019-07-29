import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import {
    Button,
    Dialog,
    IconButton,
    TextField,
    Typography
} from "@material-ui/core";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        width: "300px"
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    },
    openButton: {
        width: "100%",
        height: "40px",
        margin: "10px",
        fontSize: "1.2rem"
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const OpenDialogueButton = withStyles(styles)(props => {
    const { classes, onOpen } = props;
    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.openButton}
            onClick={onOpen}
        >
            Login with Email
        </Button>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

class LoginModal extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <>
                <OpenDialogueButton onOpen={this.handleClickOpen} />
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                >
                    <DialogTitle
                        id="customized-dialog-title"
                        onClose={this.handleClose}
                    >
                        Login with Email
                    </DialogTitle>
                    <DialogContent dividers>
                        <form>
                            <TextField
                                id="email"
                                label="Email"
                                // className={classes.textField}
                                // value={values.name}
                                // onChange={handleChange("name")}
                                margin="normal"
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default LoginModal;
