import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PoemCard from './PoemCard';
import PoemFormModal from './PoemFormModal';

import { signUp } from '../../store/actions';



function PoemList(props) {

    return (
        <div>
            <PoemFormModal className={"poem-form-modal"} />
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