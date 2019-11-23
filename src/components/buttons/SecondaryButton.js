import React from 'react';
import useStyles from "./styles/_secondaryButton.js"

export default function SecondaryButton(props) {
    const classes = useStyles();

    return (
        <button className={classes.secondaryButton}>
            {props.title}
        </button>
    )
}
