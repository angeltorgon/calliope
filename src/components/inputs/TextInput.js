import React from 'react';
import useStyles from './styles/_textInput';

export default function TextInput(props) {
    const classes = useStyles();

    return (
        <div className={classes.textInputContainer}>
            <p className={classes.errorMessage}>{props.error}</p>
            <input
                onChange={(e) => props.onChange(e, props.name)}
                value={props.value}
                placeholder={props.placeholder}
                className={`${classes.textInput} ${props.error ? classes.formInputError : null}`}
                type={props.type} />
        </div>
    )
}
