import React from 'react';
import useStyles from './styles/_textInput';

export default function TextInput(props) {
    const classes = useStyles();

    return (
        <div className={classes.textInputContainer}>
            <input
                onChange={(e) => props.onChange(e, props.name)}
                value={props.value}
                placeholder={props.placeholder}
                className={classes.textInput}
                type={props.type} />
        </div>
    )
}
