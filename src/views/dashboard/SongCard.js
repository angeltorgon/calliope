import React, { useState } from 'react';
// import SongContext from '../../context/song-context';

export default function SongCard(props) {
    const [ song, setSong ] = useState(props.song.title);
    const [ artist, setArtist ] = useState(props.song.artist);
    const [ link, setLink ] = useState(props.song.youtubeLink);
    return (
        <div className="song-card">
            <h2 className="card-title">{song}</h2>
            <h2 className="card-artist" >{artist}</h2>
            <a href={`${link}`} className="card-title" >View on YouTube</a>
        </div>
    )
}
