import React from 'react';
import SlateEditor from '../components/SlateEditor';
import useStyles from './styles/_write';

export default function Write() {
    const classes = useStyles();

    return (
        <div className={classes.editorContainer}>
            <SlateEditor />
        </div>
    )
}
