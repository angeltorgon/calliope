import React, { useState } from 'react';
import SongCard from './SongCard';

import SongContext from '../../context/song-context';

function Dashboard() {
    // const [ song, setSong ] = useState("hello");

    // const addSong = song => {console.log("Adding song..")};
    
    // const deleteSong = songId => {console.log("Deleting song.. ")};

    return (
        <SongContext.Provider value={{
            // songs: song.songs,
            // songList: song.songList,
            // addSong: addSong,
            // deleteSong: deleteSong
        }}>
            <div>
                <SongCard/>
            </div>
        </ SongContext.Provider>
  )
}

export default Dashboard;