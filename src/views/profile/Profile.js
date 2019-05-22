import React from 'react';
import { connect } from 'react-redux';

function Profile(props) {
  console.log(props.user)
  return (
    <div className="profile-container">
      hey
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
  }
}

export default connect(mapStateToProps)(Profile);