import React, { useState, useContext, useReducer, useEffect } from 'react';

import { connect } from 'react-redux';
import PoemCard from './PoemCard';

import { signUp } from '../../store/actions';



function PoemList(props) {

    // useEffect(() => {
    //     console.log(props)
    // }, [])
 
    return (
        <div>
            {props.poems.map( poem => (
                <PoemCard key={poem.id} poem={poem}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state.authReducer)
    return { poems: state.authReducer.allPoems }
}


export default connect(mapStateToProps, {signUp})(PoemList);

