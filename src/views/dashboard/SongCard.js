import React from 'react';
import SongContext from '../../context/song-context';

export default function SongCard() {
    return (
        <div className="song-card">
            <h2 className="card-title">Song Name</h2>
            <h3 className="card-artist" >by Artist</h3>
            <p className="card-title" >youtube link</p>
        </div>
    )
}
