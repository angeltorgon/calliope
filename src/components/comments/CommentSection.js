import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';

import useStyles from "./styles/_commentSection"



function CommentSection(props) {
    const classes = useStyles();

    return (
        <div className={classes.commentSectionContainer}>
            <CommentList comments={props.comments} />
            <CommentForm addComment={props.addComment} avatar={props.avatar} poemId={props.poemId} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // allPoems: state.authReducer.allPoems
    }
}

export default connect(mapStateToProps)(CommentSection);