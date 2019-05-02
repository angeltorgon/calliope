import React, { useState } from 'react';
// import SongContext from '../../context/song-context';

export default function PoemCard(props) {
    const [ title, setTitle ] = useState(props.poem.title);
    const [ poet, setPoet ] = useState(props.poem.poet);
    const [ likes, setLies ] = useState(props.poem.likes);
    const [ text, setText ] = useState(props.poem.text);

    return (
        <div className="song-card">
            <h2 className="card-title">{title}</h2>
            <h2 className="card-artist" >{poet}</h2>
            <p className="card-poem" >{text}</p>
            <p>Likes: {likes}</p>
        </div>
    )
}
