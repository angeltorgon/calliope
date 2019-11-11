import React from 'react';
import useStyles from "./styles/_editButton.js"

export default function Button() {
    const classes = useStyles();

    return (
        <button className={classes.saveButton}>
            Save
        </button>
    )
}
