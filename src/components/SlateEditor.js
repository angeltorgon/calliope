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

function CodeNode(props) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
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
        // console.log(event.key)
        // return next()
        if (event.key != '`' || !event.ctrlKey) return next()

        // Prevent the ampersand character from being inserted.
        event.preventDefault()

        // Change the value by inserting 'and' at the cursor's position.
        // editor.insertText('and')
        // editor.setBlocks('code')

        // Determine whether any of the currently selected blocks are code blocks.
        const isCode = editor.value.blocks.some(block => block.type == 'code')

        // Toggle the block type depending on `isCode`.
        editor.setBlocks(isCode ? 'paragraph' : 'code')
    }

    const renderBlock = (props, editor, next) => {
        switch (props.node.type) {
            case 'code':
                return <CodeNode {...props} />
            default:
                return next()
        }
    }

    // Render the editor.
    return <Editor value={state.value} onChange={onChange} onKeyDown={onKeyDown} renderBlock={renderBlock} />

}

export default SlateEditor;