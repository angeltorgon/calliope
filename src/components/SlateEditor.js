// Import React!
import React, { useState } from 'react';
import { Editor } from 'slate-react';
import { Block, Value } from 'slate';
import useStyles from './styles/_slateEditor';
import Firebase from '../firebase';

const initialValue = Value.fromJSON({
  document: {
    "object": "document",
    "nodes": [
      {
        "object": "block",
        "type": "title",
        "nodes": [
          {
            "object": "text",
            "text": "Give it a spicy title!"
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "nodes": [
          {
            "object": "text",
            "text":
              "This example shows how to enforce \n your layout with schema - specific rules. \n This document will always have a title \n block at the top and at least one \n paragraph in the body.Try \n deleting them and see what happens!"
          }
        ]
      }
    ]
  }
})

const schema = {
  document: {
    nodes: [
      { match: { type: 'title' }, min: 1, max: 1 },
      { match: { type: 'paragraph' }, min: 1 },
    ],
    normalize: (editor, { code, node, child, index }) => {
      switch (code) {
        case 'child_type_invalid': {
          const type = index === 0 ? 'title' : 'paragraph'
          return editor.setNodeByKey(child.key, type)
        }
        case 'child_min_invalid': {
          const block = Block.create(index === 0 ? 'title' : 'paragraph')
          return editor.insertNodeByKey(node.key, index, block)
        }
      }
    },
  },
}

// Define our app...
const SlateEditor = () => {
  const classes = useStyles();
  // Set the initial value when the app is first constructed.
  const [state, setState] = useState({
    value: initialValue,
  });

  //Make reference to poems firebase collection

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = JSON.stringify(state.value.toJSON());
    // submit poem to published poem collection
    Firebase.Poems.doc().set({
      value: content,
      username: "hellohello", // need to get this from state
      createdAt: new Date(),
      likes: null,
      comments: [],
      published: true,
    }, { merge: true })
    console.log("content", content);
  };



  // On change, update the app's React state with the new editor value.
  const onChange = ({ value }) => {
    // Save the value to Local Storage.
    const content = JSON.stringify(value.toJSON());

    // Make api call here to save changeson drafts collection
    localStorage.setItem('content', content)
    setState({ value })
  }

  // Render the editor.
  return (
    <div className={classes.editorContainer} >
      <Editor renderBlock={renderBlock} schema={schema} className={classes.editor} value={state.value} onChange={onChange} placeholder="Write your poetry..." />
    </div>
  )
}

const TitleNode = props => {
  const classes = useStyles();
  return <h1 className={classes.poemTitle}>{props.children}</h1>;
};

const PoemNode = props => {
  const classes = useStyles();
  return <quote className={classes.poemTitle}>{props.children}</quote>;
};

const renderBlock = (props, editor, next) => {
  const { attributes, children, node } = props
  switch (node.type) {
    case 'title':
      return <TitleNode {...attributes}>{children}</TitleNode>
    case 'paragraph':
      return <PoemNode {...attributes}>{children}</PoemNode>
    default:
      return next()
  }
}


export default SlateEditor;