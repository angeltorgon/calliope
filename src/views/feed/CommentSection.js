import React, { useState } from 'react';
import ComponentList from './CommentList';
import ComponentForm from './CommentForm';
import { connect } from 'react-redux';
import { postComment } from '../../store/actions';

import axios from 'axios';

function CommentSection(props) {

    const [ comments, setComments ] = useState(props.comments)

    const addComment = (comment) => {
            setComments([...comments, comment]);
            props.postComment(comment);
    }




    return (
        <>
            <ComponentList comments={comments}/>
            <ComponentForm addComment={addComment} avatar={props.avatar} poemId={props.poemId}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        allPoems: state.authReducer.allPoems
    }
}
  
export default connect(mapStateToProps, { postComment })(CommentSection);