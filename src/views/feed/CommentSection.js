import React from 'react';
import ComponentList from './CommentList';
import ComponentForm from './CommentForm';

function CommentSection(props) {
    return (
        <div>
            <ComponentList comments={props.comments}/>
            <ComponentForm avatar={props.poemId} poemId={props.avatar}/>
        </div>
    )
}
  
export default CommentSection;