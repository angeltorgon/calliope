import React, { useState, useContext, useReducer } from 'react';
import PoemCard from './PoemCard';
import poemContext from '../../context/poem-context';
import { red, initialState } from '../../reducers';


function SongList() {
    // const poems = useContext(poemContext);
    // const [poemList, setPoemList] = useState(poems);
    const [state, dispatch] = useReducer(red, initialState);
    console.log(state)

    

    return (
        <div onClick={() => dispatch({type:'SAY_HELLO'})}>
        {/* {poemList.map( (poem, index) => <PoemCard key={index} poem={poem}/> )} */}
            <h1>Greeting: {state.greeting}</h1>
        </div>
    )
}

export default SongList;