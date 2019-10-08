import React from 'react';
import useStyles from './styles/_textInput';

export default function TextInput(props) {
    const classes = useStyles();

    return (
        <div className={classes.textInputContainer}>
            <input placeholder={props.placeholder} className={classes.textInput} type="text" />
        </div>
    )
}
