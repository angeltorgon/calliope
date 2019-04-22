import React, { useState } from 'react';
import SongCard from './SongCard';

const songListDummy = [
    {title:"Alive", artist:"Hillsong Y&F", youtubeLink:"https://www.youtube.com/watch?v=qEvEVALLjNQ"},
    {title:"Reckless Love", artist:"Bethel", youtubeLink:"https://www.youtube.com/watch?v=6xx0d3R2LoU"},
    {title:"Rey de Reyes", artist:"Marco Barrientos", youtubeLink:"https://www.youtube.com/watch?v=bmDzzPNZP18"},
    {title:"Por Siempre", artist:"En Espiritu y En Verdad", youtubeLink:"https://www.youtube.com/watch?v=NiLYVglDj90"},
    {title:"Aqui Estoy", artist:"Hillsong", youtubeLink:"https://www.youtube.com/watch?v=c73KbYvsIDc"},
    {title:"Do It Again", artist:"Elevation Worship", youtubeLink:"https://www.youtube.com/watch?v=ZOBIPb-6PTc"}
];

function SongList() {

    // const [song, setSong] = useState("song")
    return (
        <div>
        {songListDummy.map( (song, index) => <SongCard key={index} song={song}/> )}
        </div>
    )
}

export default SongList;