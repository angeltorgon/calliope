import React from 'react';
import SongContext from '../../context/song-context';

export default function SongCard() {
    return (
        <div className="song-card">
            <h2>Song Name</h2>
            <h3>by Artist</h3>
            <p>youtube link</p>
        </div>
    )
}
