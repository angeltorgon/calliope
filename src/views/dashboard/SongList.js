import React, { useState, useContext } from 'react';
import SongCard from './SongCard';
import songContext from '../../context/song-context';


function SongList() {
    const songs = useContext(songContext);
    const [songList, setSongList] = useState(songs)
    return (
        <div>
        {songList.map( (song, index) => <SongCard key={index} song={song}/> )}
        </div>
    )
}

export default SongList;