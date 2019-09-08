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
        type: 'title',
        nodes: [
          {
            object: 'text',
            text: "Title"
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: "Paragraph"
          },
        ],
      },
    ],
  },
})

const schema = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'title',
        nodes: [
          {
            object: 'text',
            text: "Title"
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: "Paragraph"
          },
        ],
      },
    ],
  },
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

  // Render the editor.
  return (
    <div className={classes.editorContainer} >
      <Editor renderBlock={renderBlock} schema={schema} className={classes.editor} value={state.value} onChange={onChange} placeholder="Write your poetry..." />
    </div>
  )
}

const TitleNode = props => {
  return <h1>{props.children}</h1>;
};

const renderBlock = (props, editor, next) => {
  const { attributes, children, node } = props
  switch (node.type) {
    case 'title':
      return <TitleNode {...attributes}>{children}</TitleNode>
    case 'paragraph':
      return <span {...attributes}>{children}</span>
    default:
      return next()
  }
}


export default SlateEditor;