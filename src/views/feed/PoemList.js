import React, { useState, useContext, useReducer, useEffect } from 'react';

import { connect } from 'react-redux';
import PoemCard from './PoemCard';

import { signUp } from '../../store/actions';



function SongList(props) {
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


export default connect(mapStateToProps, {signUp})(SongList);

