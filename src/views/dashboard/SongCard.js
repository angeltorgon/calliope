import React from 'react';
import SongContext from '../../context/song-context';

export default function SongCard(props) {
    console.log(props)
    return (
        <div className="song-card">
            <h2 className="card-title">{props.song.title}</h2>
            <h3 className="card-artist" >{props.song.artist}</h3>
            <a href={`${props.song.youtubeLink}`} className="card-title" >View on YouTube</a>
        </div>
    )
}
