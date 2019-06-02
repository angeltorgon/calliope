import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';



function CommentSection(props) {

    const [ comments, setComments ] = useState(props.comments)

    const addComment = (comment) => {
          
    }

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