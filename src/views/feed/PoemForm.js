/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';

class PoemForm extends React.Component {
    render() {
        return (
            <div className='poem-form'>
                <form>
                    <input type='text' placeholder='title' />
                    <input type='text' placeholder='title' />
                </form>
            </div>
        );
    }
}

export default PoemForm;