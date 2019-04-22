import React from 'react';
import SongContext from '../../context/song-context';

export default function SongCard() {
    return (
        <div className="song-card">
            <h2 classNAme="card-title">Song Name</h2>
            <h3 classNAme="card-artist" >by Artist</h3>
            <p classNAme="card-title" >youtube link</p>
        </div>
    )
}
