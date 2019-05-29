/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class PoemFormModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isOpen: false,
    
        }
        this.toggleModal = this.toggleModal.bind(this);
        
    }

    toggleModal() {

        this.setState((prevState) => ({isOpen:!prevState.isOpen})
        )
        // this.setState({isOpen: true})
    }

    render() {
        return (
            <div>
                <button className='add-button' onClick={this.toggleModal}>
                    <img src="https://img.icons8.com/ios/100/000000/plus-math.png" />
                </button>

                {
                    this.state.isOpen
                    ?
                    <div className='poem-form-modal'>
                        <form>
                            <input type='text' placeholder='title'/>
                        </form>
                    </div>
                    :
                    null
                }
               
            </div>
        );
    }
}

export default PoemFormModal;