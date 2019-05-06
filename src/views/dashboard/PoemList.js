import React, { useState, useContext } from 'react';
import PoemCard from './PoemCard';
import poemContext from '../../context/poem-context';


function SongList() {
    // const poems = useContext(poemContext);
    // const [poemList, setPoemList] = useState(poems);
    return (
        <div>
        {/* {poemList.map( (poem, index) => <PoemCard key={index} poem={poem}/> )} */}
        </div>
    )
}

export default SongList;