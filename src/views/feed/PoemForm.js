/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useEffect } from 'react';

function PoemForm(props) {

    useEffect(() => {
        if(localStorage.getItem('token')) {
          props.history.push('/dashboard');
        } else {
          props.history.push('/');
        }
      }, [])

        return (
            <div className='poem-form'>
                <h2>Write a Poem</h2>
                <form>
                    <input className="poem-title" type='text' placeholder='title' />
                    <input type='text' placeholder='Write a poem' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                    <input type='text' placeholder='' />
                </form>
                <button>Add Poem</button>
            </div>
        );
    }

export default PoemForm;