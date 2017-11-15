// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import DoWhopButton from './DoWhopButton';
import { setInputValue } from '../actions/dowhop-descriptions'; // CHECK. TO-DO: Add updateDoWhopDescription.

class EditDoWhop extends Component<Props, State> {
  state = {
    modal: false
  };

  toggle = () => this.setState(prevState => ({ modal: !prevState.modal }));

  handleChange = (e: Object, input: string) => {
    this.props.handleInputChange(e, input);
  };

  handleSubmit = () => {
    // CHECK:
    const changeDoWhopDescription = {
      doerDescription: this.props.inputValues.valueDoerEmail
    };

    this.props.handleInputSubmit(changeDoWhopDescription);

    this.toggle();
  };

  render() {
    //             const {
    //   valueTitleValid,
    //         valueWhyValid,
    //         valueWhoValid,
    //         valueYouValid,
    //         valueWhatValid,
    //         valueWhenValid,
    //         valueWhereValid,
    //         valueCostValid
    // } = this.state;
    const { valueDoerEmail, doWhopDescriptionKey } = this.props;
    //     const {
    // //   valueTitleValid,
    // //         valueWhyValid,
    // //         valueWhoValid,
    // //         valueYouValid,
    // //         valueWhatValid,
    // //         valueWhenValid,
    // //         valueWhereValid,
    // //         valueCostValid
    // } = this.state;
    // const { valueTitle, valueWhy, valueWho, valueYou, valueWhat, valueWhen, valueWhere, valueCost } = this.props;
    return <div>
        <DoWhopButton onClick={this.toggle}>Edit DoWhop</DoWhopButton>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody className="edit-dowhop-form">
            <ModalHeader toggle={this.toggle}>
              Edit Your DoWhop
            </ModalHeader>
            <Form>
              <FormGroup>
                <Label>({doWhopDescriptionKey})</Label>
                <Label for="doer-email">
                  DoWhop Doer Email
                  <Input type="text" size="sm" value={valueDoerEmail} name="dowhop-doer-email" id="dowhop-doer-email" placeholder="Email for who's doing the DoWhop" onChange={e => this.handleChange(e, "valueDoerEmail")} />
                </Label>
                <br />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <DoWhopButton onClick={this.handleSubmit}>Save</DoWhopButton>
            <DoWhopButton onClick={this.toggle}>Cancel</DoWhopButton>
          </ModalFooter>
        </Modal>
      </div>;
  }
}

const mapStateToProps = ({ inputValues, currentUser }) => ({
  inputValues,
  currentUser
});

// CHECK:
const mapDispatchToProps = (dispatch: Function) => ({
  handleInputChange(e, input) {
    dispatch(setInputValue(e.target.value, input));
  },
  handleInputSubmit(changeDoWhopDescription) {
    console.log(changeDoWhopDescription); // DEV TO-DO: Link submission to data update.
    // updateDoWhopDescription(changeDoWhopDescription);
  }
});

// Example:
// const mapDispatchToProps = (dispatch: Function) => ({
//     handleInputChange(e, input) {
//         dispatch(setInputValue(e.target.value, input));
//     },
//     handleInputSubmit(doWhopDescription) {
//         submitDoWhopDescription(doWhopDescription);
//     }
// });

// CHECK:
// export default EditDoWhop;
export default connect(mapStateToProps, mapDispatchToProps)(EditDoWhop);
