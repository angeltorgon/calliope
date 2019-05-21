import React from 'react';
import dateFormat from 'dateformat';

export default function Comment(props) {
  return (
    <div className="comment">
      <p>{dateFormat(props.comment.created_at, 'mediumDate')}</p>
      <p>{props.comment.comment}</p>
      <p>Likes: {props.comment.likes}</p>
    </div>
  )
}
