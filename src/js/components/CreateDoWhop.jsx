// @flow

import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DoWhopButton from './DoWhopButton';

type Props = {};
type State = {
  modal: boolean,
  valueTitleValid: boolean,
  valueWhyValid: boolean,
  valueWhoValid: boolean,
  valueYouValid: boolean,
  valueWhatValid: boolean,
  valueWhenValid: boolean,
  valueWhereValid: boolean,
  valueCostValid: boolean,
  valueTitle: string,
  valueWhy: string,
  valueWho: string,
  valueYou: string,
  valueWhat: string,
  valueWhen: string,
  valueWhere: string,
  valueCost: string
};

class CreateDoWhop extends Component<Props, State> {
  state = {
    modal: false,
    valueTitleValid: true,
    valueWhyValid: true,
    valueWhoValid: true,
    valueYouValid: true,
    valueWhatValid: true,
    valueWhenValid: true,
    valueWhereValid: true,
    valueCostValid: true,
    valueTitle: '',
    valueWhy: '',
    valueWho: '',
    valueYou: '',
    valueWhat: '',
    valueWhen: '',
    valueWhere: '',
    valueCost: ''
  };

  toggle = () => this.setState(prevState => ({ modal: !prevState.modal }));

  handleChange = (e: Object, input: string) => {
    console.log(e.target.value, ' === ', input);
    // this.validateSocialUrl(e, site);
    // this.props.handleSocialUrlChange(e, site);
  };

  handleSubmit = () => {
    // const socialUrls = {
    //   facebookUrl: this.props.socialInputs.valueFB,
    //   twitterUrl: this.props.socialInputs.valueTW,
    //   instagramUrl: this.props.socialInputs.valueIG,
    //   linkedInUrl: this.props.socialInputs.valueIN
    // };
    // this.props.handleSocialMediaUrlSubmit(socialUrls, this.props.uid);
    // this.toggle();
  };

  render() {
    const {
      valueTitle,
      valueWhy,
      valueWho,
      valueYou,
      valueWhat,
      valueWhen,
      valueWhere,
      valueCost,
      valueTitleValid,
      valueWhyValid,
      valueWhoValid,
      valueYouValid,
      valueWhatValid,
      valueWhenValid,
      valueWhereValid,
      valueCostValid
    } = this.state;
    return (
      <div>
        <DoWhopButton onClick={this.toggle}>Create a New DoWhop</DoWhopButton>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody className="create-dowhop-form">
            <ModalHeader toggle={this.toggle}>Create a new DoWhop</ModalHeader>
            <Form>
              <FormGroup>
                <Label for="title">
                  DoWhop title
                  <Input
                    type="text"
                    size="sm"
                    value={valueTitle}
                    name="dowhop-title"
                    id="title"
                    placeholder="Do this with me"
                    onChange={e => this.handleChange(e, 'valueTitle')}
                    valid={valueTitleValid}
                  />
                </Label>
                <br />
                <Label for="why">
                  Why do this DoWhop?
                  <Input
                    type="textarea"
                    size="sm"
                    value={valueWhy}
                    name="dowhop-why"
                    id="why"
                    placeholder="Pitch this DoWhop. People who love doing this type of activity will think this part of the experience is awesome!"
                    onChange={e => this.handleChange(e, 'valueWhy')}
                    valid={valueWhyValid}
                    maxLength="500"
                    rows="6"
                  />
                </Label>
                <br />
                <Label for="who">
                  Who should join you?
                  <Input
                    type="text"
                    size="sm"
                    value={valueWho}
                    name="dowhop-who"
                    id="who"
                    placeholder="This many people with this skill level can join"
                    onChange={e => this.handleChange(e, 'valueWho')}
                    valid={valueWhoValid}
                  />
                </Label>
                <br />
                <Label for="you">
                  Who are you?
                  <Input
                    type="text"
                    size="sm"
                    value={valueYou}
                    name="dowhop-you"
                    id="you"
                    placeholder="I have this skill level and this background/experience"
                    onChange={e => this.handleChange(e, 'valueYou')}
                    valid={valueYouValid}
                  />
                </Label>
                <br />
                <Label for="what">
                  What will you provide?
                  <Input
                    type="text"
                    size="sm"
                    value={valueWhat}
                    name="dowhop-what"
                    id="linkedin"
                    placeholder="I bring this, you bring that, we will make this"
                    onChange={e => this.handleChange(e, 'valueWhat')}
                    valid={valueWhatValid}
                  />
                </Label>
                <br />
                <Label for="when">
                  When will you do?
                  <Input
                    type="text"
                    size="sm"
                    value={valueWhen}
                    name="social-linkedin"
                    id="when"
                    placeholder="It will take this many hours, on these days"
                    onChange={e => this.handleChange(e, 'valueWhen')}
                    valid={valueWhenValid}
                  />
                </Label>
                <br />
                <Label for="where">
                  Where will you meet?
                  <Input
                    type="text"
                    size="sm"
                    value={valueWhere}
                    name="dowhop-where"
                    id="where"
                    placeholder="Meet at this location"
                    onChange={e => this.handleChange(e, 'valueWhere')}
                    valid={valueWhereValid}
                  />
                </Label>
                <br />
                <Label for="cost">
                  How much will it cost?
                  <Input
                    type="text"
                    size="sm"
                    value={valueCost}
                    name="dowhop-cost"
                    id="cost"
                    placeholder="This much per person"
                    onChange={e => this.handleChange(e, 'valueCost')}
                    valid={valueCostValid}
                  />
                </Label>
                <br />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <DoWhopButton onClick={this.toggle}>Save</DoWhopButton>
            <DoWhopButton onClick={this.toggle}>Cancel</DoWhopButton>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateDoWhop;
