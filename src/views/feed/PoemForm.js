/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { postPoem } from '../../store/actions';

function PoemForm(props) {

useEffect(() => {
    if(!localStorage.getItem('token')) {
        props.history.push('/');
    }
    }, [])

    const [ line_1, setLine_1 ] = useState('')
    const [ line_2, setLine_2 ] = useState('')
    const [ line_3, setLine_3 ] = useState('')
    const [ line_4, setLine_4 ] = useState('')
    const [ line_5, setLine_5 ] = useState('')
    const [ line_6, setLine_6 ] = useState('')
    const [ line_7, setLine_7 ] = useState('')
    const [ line_8, setLine_8 ] = useState('')
    const [ line_9, setLine_9 ] = useState('')
    const [ line_10, setLine_10 ] = useState('')
    const [ line_11, setLine_11 ] = useState('')
    const [ line_12, setLine_12 ] = useState('')
    const [ line_13, setLine_13 ] = useState('')
    const [ line_14, setLine_14 ] = useState('')
    const [ line_15, setLine_15 ] = useState('')
    const [ line_16, setLine_16 ] = useState('')
    const [ line_17, setLine_17 ] = useState('')
    const [ line_18, setLine_18 ] = useState('')
    const [ line_19, setLine_19 ] = useState('')
    const [ line_20, setLine_20 ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.postPoem({
            line_1: line_1,
            line_2: line_2,
            line_3: line_3,
            line_4: line_4,
            line_5: line_5,
            line_6: line_6,
            line_7: line_7,
            line_8: line_8,
            line_9: line_9,
            line_10: line_10,
            line_11: line_11,
            line_12: line_12,
            line_13: line_13,
            line_14: line_14,
            line_15: line_15,
            line_16: line_16,
            line_17: line_17,
            line_18: line_18,
            line_19: line_19,
            line_20: line_20
        });
    }

    return (
        <div className='poem-form'>
            <h2>Write a Poem</h2>
            <form onSubmit={handleSubmit}>
                <input className="poem-title" type='text' placeholder='title' />
                <input value={line_1} onChange={(e) => setLine_1(e.target.value)} name='line_1' type='text' placeholder='Write a poem' />
                <input value={line_2} onChange={(e) => setLine_2(e.target.value)} name='line_2' type='text' placeholder='' />
                <input value={line_3} onChange={(e) => setLine_3(e.target.value)} name='line_3' type='text' placeholder='' />
                <input value={line_4} onChange={(e) => setLine_4(e.target.value)} name='line_4' type='text' placeholder='' />
                <input value={line_5} onChange={(e) => setLine_5(e.target.value)} name='line_5' type='text' placeholder='' />
                <input value={line_6} onChange={(e) => setLine_6(e.target.value)} name='line_6' type='text' placeholder='' />
                <input value={line_7} onChange={(e) => setLine_7(e.target.value)} name='line_7' type='text' placeholder='' />
                <input value={line_8} onChange={(e) => setLine_8(e.target.value)} name='line_8' type='text' placeholder='' />
                <input value={line_9} onChange={(e) => setLine_9(e.target.value)} name='line_9' type='text' placeholder='' />
                <input value={line_10} onChange={(e) => setLine_10(e.target.value)} name='line_10' type='text' placeholder='' />
                <input value={line_11} onChange={(e) => setLine_11(e.target.value)} name='line_11' type='text' placeholder='' />
                <input value={line_12} onChange={(e) => setLine_12(e.target.value)} name='line_12' type='text' placeholder='' />
                <input value={line_13} onChange={(e) => setLine_13(e.target.value)} name='line_13' type='text' placeholder='' />
                <input value={line_14} onChange={(e) => setLine_14(e.target.value)} name='line_14' type='text' placeholder='' />
                <input value={line_15} onChange={(e) => setLine_15(e.target.value)} name='line_15' type='text' placeholder='' />
                <input value={line_16} onChange={(e) => setLine_16(e.target.value)} name='line_16' type='text' placeholder='' />
                <input value={line_17} onChange={(e) => setLine_17(e.target.value)} name='line_17' type='text' placeholder='' />
                <input value={line_18} onChange={(e) => setLine_18(e.target.value)} name='line_18' type='text' placeholder='' />
                <input value={line_19} onChange={(e) => setLine_19(e.target.value)} name='line_19' type='text' placeholder='' />
                <input value={line_20} onChange={(e) => setLine_20(e.target.value)} name='line_20' type='text' placeholder='' />
            
                <button>Add Poem</button>
            </form>
        </div>
    );
}

export default connect(null, { postPoem })(PoemForm);