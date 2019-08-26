import React, { useState } from "react";
import { connect } from "react-redux";
import useStyles from "./styles/commentForm";

function CommentForm(props) {
    const classes = useStyles();

    const [commentText, setCommentText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const comment = {
            // comment: commentText,
            // username: localStorage.getItem('username'),
            // user_id: localStorage.getItem('userId'),
            // poem_id: props.poemId,
        };

        props.addComment(comment);
        setCommentText("");
    };

    return (
        <div className={classes.commentFormContainer}>
            <img className="avatar" src="https://img.icons8.com/material/96/000000/user--v1.png" alt="user" />
            <form onSubmit={handleSubmit} className={classes.commentForm}>
                <input onChange={e => setCommentText(e.target.value)} value={commentText} className={classes.commentInput} type="text" placeholder="comment" />
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        // user: state.authReducer.user
    };
};

export default connect(mapStateToProps)(CommentForm);
