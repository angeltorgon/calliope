import React, { useState } from 'react';
import { connect } from 'react-redux';

function CommentForm(props) {

    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = {
            comment: commentText,
            username: props.user.username,
            user_id: localStorage.getItem('userId'),
            poem_id: localStorage.getItem('username'),
        }
        props.addComment(comment);
        setCommentText('');
    }
    return (
        <div className="comment-form-container">
            <img className="avatar" className="avatar" src={localStorage.getItem('avatar')} alt="user picture" />
            <form onSubmit={handleSubmit} className="comment-form">
                <input onChange={(e) => setCommentText(e.target.value)} value={commentText} className="comment-input" type="text" placeholder="comment" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps)(CommentForm);