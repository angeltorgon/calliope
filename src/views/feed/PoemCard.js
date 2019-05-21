import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import dateFormat from 'dateformat';

export default function PoemCard(props) {
    const [title, setTitle] = useState(props.poem.poemTitle);
    const [poet, setPoet] = useState(props.poem.username);
    const [likes, setLies] = useState(props.poem.likes);
    const [text, setText] = useState(props.poem.poem);
    const [comments, setComments] = useState(props.poem.comments);
    const [poemDate, setPoemDate] = useState(props.poem.created_at);

    useEffect(() => {
        const date = poemDate;
        console.log(dateFormat(poemDate, 'mediumDate'));
    })

    return (
        <div className="song-card">
            <div className="poem-stamp">
                <img className="avatar" src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1310&q=80" alt="user picture" />

                <div className="stamp-text">
                    <p className="stamp-text-item author" >{poet}</p>
                    <p className="stamp-text-item" >{
                        dateFormat(poemDate, 'mediumDate')
                    }</p>

                </div>

            </div>
            <h2 className="poem-title">{title}</h2>
            <p className="card-poem" >{text}</p>
            <p>Likes: {likes}</p>
            <div className="comments-container">
                {comments.map(comment => {
                    return <Comment comment={comment} />
                })}
            </div>
        </div>
    )
}
