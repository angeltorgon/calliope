import React from 'react';
import dateFormat from 'dateformat';
import UserStamp from '../../components/UserStamp';

export default function Comment(props) {

  console.log(props)

  return (
    <div className="comment">
      <UserStamp
        userId={props.comment.user_id}
        poet={props.comment.username}
        date={dateFormat(props.comment.updated_at, 'mediumDate')}
      />
   
      <p>{props.comment.comment}</p>
      <p>Likes: {props.comment.likes}</p>
    </div>
  )
}
