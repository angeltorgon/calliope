import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from '../../store/actions';


function UserFeed(props) {
    return (
        <div>
            
        </div>
    )
}


export default connect(null, fetchUserPosts)(UserFeed)