import React from 'react';
import ComponentList from './CommentList';
import ComponentForm from './CommentForm';

function CommentSection(props) {

    const addComment = (e, comment) => {
        e.preventDefault();
        props.addComment(comment);
        
    }


    return (
        <div>
            <ComponentList comments={props.comments}/>
            <ComponentForm addComment={addComment} avatar={props.poemId} poemId={props.avatar}/>
        </div>
    )
}
  
export default CommentSection;