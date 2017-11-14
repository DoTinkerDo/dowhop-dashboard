// @flow 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import DoWhopButton from './DoWhopButton';
import { setInputValue } from '../actions/dowhop-descriptions'; // CHECK. TO-DO: Add updateDoWhopDescription.

// Example:
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Moment from 'moment';
// import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import DoWhopButton from './DoWhopButton';
// import { setInputValue, submitDoWhopDescription } from '../actions/dowhop-descriptions';

// CHECK:
// type Props = {
    // handleInputChange: Function,
    // handleInputSubmit: Function,
    // inputValues: Object,
    // currentUser: Object,
    // valueTitle: string,
    // valueWhy: string,
    // valueWho: string,
    // valueYou: string,
    // valueWhat: string,
    // valueWhen: string,
    // valueWhere: string,
    // valueCost: string
// };

// Example:
// type Props = {
//     handleInputChange: Function,
//     handleInputSubmit: Function,
//     inputValues: Object,
//     currentUser: Object,
//     valueTitle: string,
//     valueWhy: string,
//     valueWho: string,
//     valueYou: string,
//     valueWhat: string,
//     valueWhen: string,
//     valueWhere: string,
//     valueCost: string
// };

// CHECK:
// type State = {
    // modal: boolean,
    // valueTitleValid: boolean,
    // valueWhyValid: boolean,
    // valueWhoValid: boolean,
    // valueYouValid: boolean,
    // valueWhatValid: boolean,
    // valueWhenValid: boolean,
    // valueWhereValid: boolean,
    // valueCostValid: boolean
// };

// CHECK:
class EditDoWhop extends Component<Props, State> {
    state = {
        modal: false,
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

        // Example:
        // const doWhopDescription = {
        //     titleDescription: this.props.inputValues.valueTitle,
        //     whyDescription: this.props.inputValues.valueWhy,
        //     whoDescription: this.props.inputValues.valueWho,
        //     whoAmIDescription: this.props.inputValues.valueYou,
        //     whatDescription: this.props.inputValues.valueWhat,
        //     whenDescription: this.props.inputValues.valueWhen,
        //     whereDescription: this.props.inputValues.valueWhere,
        //     howMuchDescription: this.props.inputValues.valueCost,
        //     createdBy: this.props.currentUser.uid,
        //     creatorDescription: this.props.currentUser.email.toLowerCase(),
        //     createdAt: Moment().format('YYYY-MM-DD--HH:mm')
        // };

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
        const { valueDoerEmail } = this.props;
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
        return (
            <div>
                <DoWhopButton onClick={this.toggle}>Edit DoWhop</DoWhopButton>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody className="edit-dowhop-form">
                        <ModalHeader toggle={this.toggle}>Edit your DoWhop</ModalHeader>
                        <Form>
                            <FormGroup>
                                <Label for="doer-email">
                                    DoWhop Doer Email
                  <Input
                                        type="text"
                                        size="sm"
                                        value={valueDoerEmail}
                                        name="dowhop-doer-email"
                                        id="dowhop-doer-email"
                                        placeholder="Email for who's doing the DoWhop"
                                        onChange={e => this.handleChange(e, 'valueDoerEmail')}
                                        // valid={valueDoerEmailValid}
                                    />
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
            </div>
        );
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