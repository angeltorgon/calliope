import React from 'react'

export default function CommentForm(props) {
    return (
        <div className="comment-form-container">
            <img className="avatar" className="avatar" src={props.avatar} alt="user picture" />

            <input className="comment-input" type="text" placeholder="comment" />
        </div>
    )
}
