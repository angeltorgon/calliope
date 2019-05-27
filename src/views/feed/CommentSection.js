import React, { useState } from 'react';
import ComponentList from './CommentList';
import ComponentForm from './CommentForm';
import { connect } from 'react-redux';

import axios from 'axios';

function CommentSection(props) {

    const [ comments, setComments ] = useState(props.comments)

    const fetchComments = (poemId, comment) => {
        console.log('fetchComments was triggered')
            // axios
            // .get(`http://localhost:4000/api/comments/${poemId}`)
            // .then( res => {
            //     console.log(res.data.comments)
        
            // })
            // .catch( err => {
            //     console.log(err);
            // })
            // setComments({...comments, comment});
    }




    return (
        <div>
            <ComponentList comments={comments}/>
            <ComponentForm fetchComments={fetchComments} avatar={props.avatar} poemId={props.poemId}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allPoems: state.authReducer.allPoems
    }
}
  
export default connect(mapStateToProps)(CommentSection);