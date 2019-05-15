import React, { useState } from 'react';

export default function PoemCard(props) {
    const [ title, setTitle ] = useState(props.poem.poemTitle);
    const [ poet, setPoet ] = useState(props.poem.username);
    const [ likes, setLies ] = useState(props.poem.likes);
    const [ text, setText ] = useState(props.poem.poem);

    return (
        <div className="song-card">
            <h2 className="card-title">{title}</h2>
            <h2 className="card-artist" >{poet}</h2>
            <p className="card-poem" >{text}</p>
            <p>Likes: {likes}</p>
        </div>
    )
}
