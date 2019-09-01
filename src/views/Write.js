// Import React!
import React, { useState } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
// import { WriteStream } from 'tty';

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        text: 'A line of hoooootext in a paragraph.',
                    },
                ],
            },
        ],
    },
})

// Define our app...
const Write = () => {
    // Set the initial value when the app is first constructed.
    const [state, setState] = useState({
        value: initialValue,
    });

    // On change, update the app's React state with the new editor value.
    const onChange = ({ value }) => {
        setState({ value });
    }
    const onKeyDown = (event, editor, next) => {
        console.log(event.key)
        return next()
    }
    // Render the editor.
    return <Editor value={state.value} onChange={onChange} onKeyDown={onKeyDown} />

}

export default Write;