import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './styles/_poemMenuDialog'

export default function AlertDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <div className={classes.dialogButton} color="default" onClick={handleClickOpen}>
                <img className={classes.dialogHotDog} src="https://img.icons8.com/material-rounded/48/000000/menu-2.png" />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className={classes.menuDialog} >
                    <Button className={classes.menuOption}>Edit</Button>
                    <Button className={classes.menuOption}>Delete</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}