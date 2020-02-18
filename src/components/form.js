import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import { Form } from 'react-bootstrap';
import firebase from '../config/fire';

import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

class Formulario extends Component {
  state = {
    name: '',
    email: '',
    country: '',
    phone: '',
    message: ''
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleCountryChange = e => {
    this.setState({
      country: e.target.value
    });
  };

  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handleTextChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  createNotification = type => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success ', 'Thx for your message');
          break;
        case 'warning':
          NotificationManager.warning(
            'Warning message',
            'Close after 3000ms',
            3000
          );
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();

    const db = firebase.database().ref('usuario');
    db.set(this.state).then(resultado => console.log(resultado));
  };

  render() {
    return (
      <div className="formulario">
        <h3 style={{ textAlign: 'center' }}>Or leave your Message!</h3>
        <NotificationContainer />
        <Grid>
          <Cell col={6} style={{ margin: 'auto', marginTop: '1.2em' }}>
            <Form
              className="formulario"
              id="contactForm"
              onSubmit={this.handleSubmit}
            >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name and Lastname"
                  onChange={this.handleNameChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={this.handleEmailChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where do you live?"
                  onChange={this.handleCountryChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="What is your number?"
                  onChange={this.handlePhoneChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  Tell me what would you like me to design for you
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={this.handleTextChange}
                />
              </Form.Group>
              <Button
                raised
                accent
                ripple
                type="submit"
                style={{ float: 'right', marginTop: '15px' }}
                onClick={this.createNotification('success')}
              >
                Submit
              </Button>
            </Form>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Formulario;
