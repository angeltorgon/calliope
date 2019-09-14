// Import React!
import React, { useState } from 'react';
import { Editor } from 'slate-react';
import { Block, Value } from 'slate';
import useStyles from './styles/_slateEditor';
import initialValue from './helpers/value';
import schema from './helpers/schema';

// Define our app...
const SlateEditor = (props) => {
  const classes = useStyles();
  // Render the editor.
  return (
    <div className={classes.editorContainer} >
      <Editor autoFocus={true} renderBlock={renderBlock} schema={schema} className={classes.editor} value={props.value} onChange={props.onChange} placeholder="Write your poetry..." />
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