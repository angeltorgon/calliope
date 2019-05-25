import React from 'react';
import dateFormat from 'dateformat';
import UserStamp from '../../components/UserStamp';

export default function Comment(props) {

  console.log(props);

  return (
    <div className="comment">
      <p>{dateFormat(props.comment.created_at, 'mediumDate')}</p>
      <p>{props.comment.comment}</p>
      <p>Likes: {props.comment.likes}</p>
    </div>
  )
}
