import React from 'react';
import useStyles from "./styles/_editButton.js"

export default function SecondaryButton(props) {
    const classes = useStyles();

    return (
        <button className={classes.editButton}>
            {props.title}
        </button>
    )
}
