import React, { useState } from 'react';
import Firebase from '../firebase';
import SlateEditor from '../components/slate/SlateEditor';
import WriteNavbar from '../components/slate/WriteNavbar';
import WriteBottomNavbar from '../components/slate/WriteBottomNavbar';
import useStyles from './styles/_write';
import initialValue from '../components/slate/helpers/value';


export default function Write() {
    const [state, setState] = useState({
        title: "",
        body: ""
    });

    // On change, update the app's React state with the new editor value.
    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    };

    // Make reference to poems firebase collection

    const handleSubmit = (e) => {
        e.preventDefault();
        // submit poem to published poem collection
        // Firebase.Poems.doc().set({
        //     value: content,
        //     username: "hellohello", // need to get this from state
        //     createdAt: new Date(),
        //     likes: [],
        //     comments: [],
        //     published: true,
        // }, { merge: true })
        console.log("content", state);
    };

    const classes = useStyles();
    return (
        <div className={classes.editorContainer}>
            <form onSubmit={handleSubmit}>
                <input onChange={onChange} value={state.title} name="title" placeholder="Give it a spicy title" />
                <textarea onChange={onChange} value={state.body} name="body" placeholder="Give it a spicy body"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

// <WriteNavbar handleSubmit={handleSubmit} />
// <SlateEditor onChange={onChange} value={state.value} />
// {/* <RichText /> */}
// <WriteBottomNavbar />