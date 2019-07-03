import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from '../../store/actions';

import PoemCard from '../feed/PoemCard';


function UserFeed(props) {

    return (
        <div className="feed">
            {props.poems.map( poem => (
                <PoemCard key={poem.id} poem={poem}/>
            ))}
        </div>
    )
}

// const mapStateToProps = state => {
//     return {

//     }
// }

export default connect(null, fetchUserPosts)(UserFeed);