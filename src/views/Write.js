import React, { useState } from 'react';
import Firebase from '../firebase';
import SlateEditor from '../components/slate/SlateEditor';
import WriteNavbar from '../components/slate/WriteNavbar';
import WriteBottomNavbar from '../components/slate/WriteBottomNavbar';
import useStyles from './styles/_write';
import initialValue from '../components/slate/helpers/value'

export default function Write() {
    const [state, setState] = useState({
        value: initialValue,
    });

    // On change, update the app's React state with the new editor value.
    const onChange = ({ value }) => {
        // Save the value to Local Storage.
        const content = JSON.stringify(value.toJSON());

        // Make api call here to save changeson drafts collection
        localStorage.setItem('content', content)
        setState({ value })
    };

    // Make reference to poems firebase collection

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = JSON.stringify(state.value.toJSON());
        // submit poem to published poem collection
        Firebase.Poems.doc().set({
            value: content,
            username: "hellohello", // need to get this from state
            createdAt: new Date(),
            likes: [],
            comments: [],
            published: true,
        }, { merge: true })
        console.log("content", content);
    };

    const classes = useStyles();
    return (
        <div className={classes.editorContainer}>
            <WriteNavbar handleSubmit={handleSubmit} />
            <SlateEditor onChange={onChange} value={state.value} />
            <WriteBottomNavbar />
        </div>
    )
}
