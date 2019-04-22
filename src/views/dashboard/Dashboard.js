import React, { useState } from 'react';
import SongCard from './SongCard';

import SongContext from '../../context/song-context';

function Dashboard() {
    // const [ song, setSong ] = useState();

    // const addSong = song => {console.log("Adding song..")};
    
    // const deleteSong = songId => {console.log("Deleting song.. ")};

    return (
       
            <div>
                <SongCard/>
            </div>
  )
}

export default Dashboard;