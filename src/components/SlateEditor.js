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
                        text: 'Title',
                    },
                    {
                        object: 'text',
                        text: 'Write your poem here...',
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
                    editor.removeMark('bold')
                } else {
                    editor.addMark('bold');
                    break
                }
            }
            // When "`" is pressed, keep our existing code block logic.
            case '`': {
                const isCode = editor.value.blocks.some(block => block.type == 'code')
                event.preventDefault()
                editor.setBlocks(isCode ? 'paragraph' : 'code')
                break
            }
            // Otherwise, let other plugins handle it.
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
    return <Editor value={state.value} onChange={onChange} onKeyDown={onKeyDown} renderBlock={renderBlock} renderMark={renderMark} />

}

export default SlateEditor;