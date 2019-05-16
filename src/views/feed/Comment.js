import React from 'react'

export default function Comment(props) {
  return (
    <div className="comment">
      <p>{props.comment.created_at}</p>
      <p>{props.comment.comment}</p>
      <p>Likes: {props.comment.likes}</p>
    </div>
  )
}
