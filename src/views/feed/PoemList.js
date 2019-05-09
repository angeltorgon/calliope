import React, { useState, useContext, useReducer, useEffect } from 'react';

import { connect } from 'react-redux';
import PoemCard from './PoemCard';

import { sayHello } from '../../store/actions/auth';


function SongList(props) {
    console.log(props.poems)
    return (
        <div>
            {props.poems.poems.map( poem => (
                <h1>{poem.title}</h1>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return { ...state }
}


export default connect(mapStateToProps, {sayHello})(SongList);

