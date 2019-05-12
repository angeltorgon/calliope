import React, { useState, useContext, useReducer, useEffect } from 'react';

import { connect } from 'react-redux';
import PoemCard from './PoemCard';

import { signUp } from '../../store/actions';



function SongList(props) {

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div>
            {props.poems.map( poem => (
                <PoemCard poem={poem}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state.authReducer)
    return { poems: state.authReducer.state.poems }
}


export default connect(mapStateToProps, {signUp})(SongList);

