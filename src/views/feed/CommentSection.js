import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';



function CommentSection(props) {
    return (
        <>
            <CommentList comments={props.comments}/>
            <CommentForm addComment={props.addComment} avatar={props.avatar} poemId={props.poemId}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        allPoems: state.authReducer.allPoems
    }
}
  
export default connect(mapStateToProps)(CommentSection);