import React, { useState } from 'react';
import useStyles from './styles/_textInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';


export default function TextInput(props) {
    const classes = useStyles();
    const [ success, setSuccess ] = useState(props.success);

    return (
        <div className={classes.textInputContainer}>
            <p className={classes.errorMessage}>{props.error}</p>
            <input
                onChange={(e) => props.onChange(e, props.name)}
                value={props.value}
                placeholder={props.placeholder}
                className={`${classes.textInput} ${props.error ? classes.formInputError : null}`}
                type={props.type} />

            <FontAwesomeIcon 
                style={!success && props.value.length > 0 ? { display: "block" } : { display: "none" }} 
                size="2x" 
                color="red" 
                icon={faTimesCircle} 
                className={classes.inputIcon} />

            <FontAwesomeIcon 
                style={success && props.value.length > 0 ? { display: "block" } : { display: "none" }}  
                size="2x" 
                color="green" 
                icon={faCheckCircle} 
                className={classes.inputIcon} />
        </div>
    )
}
