import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UserFeed from './UserFeed';

import { fetchUser, fetchUserPosts } from '../../store/actions';

function Profile(props) {

  useEffect(() => {
    props.fetchUser(props.match.params.id);
    props.fetchUserPosts(props.match.params.id);

      if(!localStorage.getItem('token')) {
        props.history.push('/');
      }

  }, [props.match.params.id]);

  return (
    <div className="profile-container">
      <div className="user-profile-container">
        <img className="user-avatar" src={props.user.avatar} alt="profile picture" />
        <h2 className="user-name">{`${props.user.firstName} ${props.user.lastName}`}</h2>
        <p className="user-bio">Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner.</p>
      </div>
      <UserFeed className="user-feed" poems={props.poems} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.userInView,
    poems: state.poemsReducer.userPoems
  }
}

export default connect(mapStateToProps, { fetchUser, fetchUserPosts })(Profile);