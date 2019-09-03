// Import React!
import React, { useState } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import useStyles from './styles/_slateEditor';

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'quote',
                nodes: [
                    {
                        object: 'text',
                    },
                ],
            },
        ],
    },
})

function CodeNode(props) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}

function BoldMark(props) {
    return <strong>{props.children}</strong>
}

// Define our app...
const SlateEditor = () => {
    const classes = useStyles();
    // Set the initial value when the app is first constructed.
    const [state, setState] = useState({
        value: initialValue,
    });

    // On change, update the app's React state with the new editor value.
    const onChange = ({ value }) => {
        setState({ value });
    }

    const onKeyDown = (event, editor, next) => {
        if (!event.ctrlKey) return next()

        // Decide what to do based on the key code...
        switch (event.key) {
            // When "B" is pressed, add a "bold" mark to the text.
            case 'b': {
                const isBold = editor.value.marks.some(mark => mark.type == 'bold')
                event.preventDefault()
                if (isBold) {
                    editor.removeMark('bold');
                } else {
                    editor.addMark('bold');
                }
            }
            default: {
                return next()
            }
        }
    }

    const renderBlock = (props, editor, next) => {
        switch (props.node.type) {
            case 'code':
                return <CodeNode {...props} />
            default:
                return next()
        }
    }

    // Add a `renderMark` method to render marks.
    const renderMark = (props, editor, next) => {
        switch (props.mark.type) {
            case 'bold':
                return <BoldMark {...props} />
            default:
                return next()
        }
    }

    // Render the editor.
    return (
    <div className={classes.editorContainer} >
        <input className={classes.titleInput} placeholder="Title"></input>
        <Editor className={classes.editor} value={state.value} onChange={onChange} onKeyDown={onKeyDown} renderBlock={renderBlock} renderMark={renderMark} placeholder="Write your poetry..." />    
    </div>)

}

export default SlateEditor;