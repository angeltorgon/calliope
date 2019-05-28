import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PoemCard from './PoemCard';

import { signUp } from '../../store/actions';



function PoemList(props) {

    return (
        <div>
            <Link to='/poemform'>
                <div className='add-button'>
                    +
                </div>
            </Link>
            {props.poems.map( poem => (
                <PoemCard key={poem.id} poem={poem}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return { poems: state.authReducer.allPoems }
}


export default connect(mapStateToProps, {signUp})(PoemList);