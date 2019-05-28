import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PoemCard from './PoemCard';
import PoemFormModal from './PoemFormModal';

import { signUp } from '../../store/actions';



function PoemList(props) {

    return (
        <div>
            {/* <Link to='/poemform'>
            <img className='add-button' src="https://img.icons8.com/ios/100/000000/plus-math.png"/>
            </Link> */}
            <PoemFormModal />
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