import React, { useState } from 'react';
import ComponentList from './CommentList';
import ComponentForm from './CommentForm';

import axios from 'axios';

function CommentSection(props) {

    const [ comments, setComments ] = useState(props.comments)

    const fetchComments = (poemId) => {
        console.log('fetchComments was triggered')
            axios
            .get(`http://localhost:4000/api/comments/${poemId}`)
            .then( res => {
                setComments(res.data.comments);
                console.log(res.data.comments)
            })
            .catch( err => {
                console.log(err);
            })
    }


    return (
        <div>
            <ComponentList comments={comments}/>
            <ComponentForm fetchComments={fetchComments} avatar={props.avatar} poemId={props.poemId}/>
        </div>
    )
}
  
export default CommentSection;