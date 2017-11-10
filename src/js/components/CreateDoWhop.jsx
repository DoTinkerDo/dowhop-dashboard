// @flow

import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DoWhopButton from './DoWhopButton';

type Props = {};
type State = {
  modal: boolean
};

class CreateDoWhop extends Component<Props, State> {
  state = { modal: false };

  toggle = () => this.setState(prevState => ({ modal: !prevState.modal }));

  render() {
    return (
      <div>
        <DoWhopButton onClick={this.toggle}>Create a New DoWhop</DoWhopButton>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          </ModalBody>
          <ModalFooter>
            <DoWhopButton onClick={this.toggle}>Do Something</DoWhopButton>
            <DoWhopButton onClick={this.toggle}>Cancel</DoWhopButton>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateDoWhop;
