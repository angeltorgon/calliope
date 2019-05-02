import React, { useState } from 'react';
// import SongContext from '../../context/song-context';

export default function SongCard(props) {
    const [ title, setTitle ] = useState(props.song.title);
    const [ poet, setPoet ] = useState(props.song.poet);
    const [ likes, setLies ] = useState(props.song.likes);
    const [ text, setText ] = useState(props.song.text);
    
    return (
        <div className="song-card">
            <h2 className="card-title">{title}</h2>
            <h2 className="card-artist" >{poet}</h2>
            <p className="card-poem" >{text}</p>
        </div>
    )
}
