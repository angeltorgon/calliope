import React, { useState } from 'react';
import SongCard from './SongCard';

import SongContext from '../../context/song-context';

export default function Dashboard() {
    const [ song, setSong ] = useState({
        songs: [
            {id:1, title:"en el nombre de jesus", artist:"christie checz", count:10},
            {id:2, title:"the stand", artist:"hillsong", count:10},
            {id:3, title:"abrenos los cielos", artist:"christine d'chlario", count:10},
            {id:4, title:"padre nuestro", artist:"bethel", count:10},
        ],
        songList: []
    });

    const addSong = song => {console.log("Adding song..")};
    
    const deleteSong = songId => {console.log("Deleting song.. ")};

    return (
        <SongContext.Provider value={{
            songs: song.songs,
            songList: song.songList,
            addSong: addSong,
            deleteSong: deleteSong
        }}>
            <div>
                <SongCard/>
            </div>
        </ SongContext.Provider>
  )
}
