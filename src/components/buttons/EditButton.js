import React from 'react';
import useStyles from "./styles/_editButton.js"

export default function EditButton() {
    const classes = useStyles();

    return (
        <button className={classes.editButton}>
            EDIT PROFILE
        </button>
    )
}
