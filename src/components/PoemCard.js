import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Firebase from "../firebase"
import CommentSection from "./comments/CommentSection";
import { Card } from "@material-ui/core";
import useStyles from "./styles/_poemCard";
import UserStamp from "./UserStamp";
import PoemStatusBar from "./PoemStatusBar";
import PoemMenuDialog from "./dialogs/PoemMenuDialog";
import { Editor } from 'slate-react';
import { Value } from 'slate';
import schema from './slate/helpers/schema';

function PoemCard(props) {
  const classes = useStyles();
  const poemDoc = Firebase.Poems.doc(props.poem.docId);
  const [poem, setPoem] = useState(props.poem);

  const fetchPoem = () => {
    poemDoc.get().then((querySnapshot) => {
      setPoem(querySnapshot.data());
    })
  }

  useEffect(() => {
    console.log(Value.fromJSON(props.poem.value));
    fetchPoem();
  }, []);

  return (
    <Card className={classes.poemCard} key={poem.id}>
      <div className={classes.poemHeader}>
        <UserStamp username={poem.username} />
        <PoemMenuDialog />
      </div>
      <h3 className={classes.poemTitle}>Poem Title</h3>
      <div className={classes.poem}>This example shows how to enforce 
 your layout with schema - specific rules. 
 This document will always have a title 
 block at the top and at least one 
 paragraph in the body.Try 
 deleting them and see what happens!</div>
      {/* <Editor renderBlock={renderBlock} className={classes.poem} value={Value.fromJSON(props.poem.value)} /> */}
      <PoemStatusBar fetchPoem={fetchPoem} poemDoc={poemDoc} docId={poem.docId} commentsLength={poem.comments.length} likes={poem.likes} />
      <CommentSection comments={poem.comments} />
    </Card>
  );
}

const TitleNode = props => {
  const classes = useStyles();
  return <h1 >{props.children}</h1>;
};

const PoemNode = props => {
  const classes = useStyles();
  return <quote >{props.children}</quote>;
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

const mapStateToProps = state => {
  return {
  };
};

export default connect()(PoemCard);

