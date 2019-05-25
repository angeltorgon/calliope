import React from 'react'

export default function CommentForm() {
    return (
        <div className="comment-form-container">
            <img className="avatar" className="avatar" src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1310&q=80" alt="user picture" />

            <input className="comment-input" type="text" placeholder="comment" />
        </div>
    )
}
