import React from 'react';
import SlateEditor from '../components/SlateEditor';
import WriteNavbar from '../components/WriteNavbar';
import useStyles from './styles/_write';

export default function Write() {
    const classes = useStyles();

    //Make reference to poems firebase collection

    const handleSubmit = (e) => {
        e.prevenDefault();
        console.log("event", e);
        // formats the form values
        // makes 
    };

    return (
        <div className={classes.editorContainer}>
            <WriteNavbar />
            <SlateEditor />
            <button onClick={handleSubmit} className={classes.submitButton}>Submit</button>
            <button onClick={handleSubmit} onClick={() => handleSubmit()} className={classes.saveButton}>Save As Draft</button>
        </div>
    )
}
