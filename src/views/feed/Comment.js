import React from 'react';
import dateFormat from 'dateformat';
import UserStamp from '../../components/UserStamp';

export default function Comment(props) {

  return (
    <div className="comment">
      <UserStamp
        userId={props.user_id}
        poet={props.username}
        date={dateFormat(props.updated_at, 'mediumDate')}
      />
   
      <p>{props.comment.comment}</p>
      <p>Likes: {props.comment.likes}</p>
    </div>
  )
}
