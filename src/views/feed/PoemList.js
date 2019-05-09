import React, { useState, useContext, useReducer, useEffect } from 'react';

import { connect } from 'react-redux';
import PoemCard from './PoemCard';

import { sayHello } from '../../store/actions/auth';



function SongList(props) {
    console.log(props.poems)
    return (
        <div>
            {props.poems.map( poem => (
                <PoemCard poem={poem}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return { ...state }
}


export default connect(mapStateToProps, {sayHello})(SongList);

