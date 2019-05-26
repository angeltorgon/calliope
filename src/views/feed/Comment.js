import React, { useEffect } from 'react';
import dateFormat from 'dateformat';
import UserStamp from '../../components/UserStamp';
import { connect } from 'react-redux';

function Comment(props) {

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className="comment">
      <UserStamp
        userId={props.comment.user_id}
        poet={props.comment.username}
        date={dateFormat(props.comment.updated_at, 'mediumDate')}
      />
   
      <p>{props.comment.comment}</p>
      {/* <p>Likes: {props.comment.likes}</p> */}
      <hr/>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    allPoems: state.authReducer.allPoems
  }
}

export default connect(mapStateToProps)(Comment);