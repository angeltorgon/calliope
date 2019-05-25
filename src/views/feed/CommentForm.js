import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../store/actions/poemActions';

function CommentForm(props) {

    const [commentText, setCommentText] = useState('');

    const handleSubmit = () => {

        const comment = {
            comment: commentText,
            username: '',
            user_id: '',
            poem_id: '',
        }
        props.addComment();
    }


    return (
        <div className="comment-form-container">
            <img className="avatar" className="avatar" src={props.avatar} alt="user picture" />
            <form onSubmit={handleSubmit} className="comment-form">
                <input onChange={(e) => setCommentText(e.target.value)} value={commentText} className="comment-input" type="text" placeholder="comment" />
            </form>
        </div>
    )
}

export default connect(null, addComment)(CommentForm);