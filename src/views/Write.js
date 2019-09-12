import React from 'react';
import SlateEditor from '../components/SlateEditor';
import WriteNavbar from '../components/WriteNavbar';
import useStyles from './styles/_write';

export default function Write() {
    const classes = useStyles();
    return (
        <div className={classes.editorContainer}>
            <WriteNavbar />
            <SlateEditor />
        </div>
    )
}
