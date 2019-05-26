import React from 'react';
import ComponentList from './CommentList';
import ComponentForm from './CommentForm';

function CommentSection() {
    return (
        <div>
            <ComponentList/>
            <ComponentForm/>
        </div>
    )
}
  
export default CommentSection;