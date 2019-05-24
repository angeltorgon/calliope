import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserFeed from './UserFeed';

import { fetchUser } from '../../store/actions';

function Profile(props) {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  });

  console.log(props.user)
  return (
    <div className="profile-container">
      <img src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1310&q=80" alt="user picture" alt="profile picture" />
      <h2 className="user-name">{`${props.user.firstName} ${props.user.lastName}`}</h2>
      <p className="user-bio">Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.</p>
      <div className="user-posts">
        s
      </div>
      <UserFeed />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
  }
}

export default connect(mapStateToProps)(Profile);