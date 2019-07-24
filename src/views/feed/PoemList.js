import React from 'react';
import { connect } from 'react-redux';
import PoemCard from '../../components/PoemCard';

import { signUp } from '../../store/actions';



function PoemList(props) {

    return (
        <div>
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