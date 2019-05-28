/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class PoemFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            unmountOnClose: true,
            poemTitle: '',
            poem: ''
        };

        this.toggle = this.toggle.bind(this);
        this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    changeUnmountOnClose(e) {
        let value = e.target.value;
        this.setState({ unmountOnClose: JSON.parse(value) });
    }

    onChange(e) {
        const inputText = e.target.name 
        this.setState({ ...this.state, [inputText]: e.target.value });
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button className='add-button' color="danger" onClick={this.toggle}>
                    <img src="https://img.icons8.com/ios/100/000000/plus-math.png" />
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader toggle={this.toggle}>Let's write a poem!</ModalHeader>
                    <ModalBody className="poem-form">
                        <input name="poemTitle" value={this.state.inputText} onChange={this.onChange} type="text" placeholder="Title"/>
                        <input name="poem" value={this.state.inputText} onChange={this.onChange} type="textarea" placeholder="Poem"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default PoemFormModal;