import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useStyles from './styles/_write.js';

export default function Write() {
    const classes = useStyles();

    return (
        <div className={classes.quillContainer}>
            <ReactQuill className={classes.quill} />
        </div>
    )
}
