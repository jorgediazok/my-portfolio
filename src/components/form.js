import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import { Form } from 'react-bootstrap';
import firebase from '../config/fire';

class Formulario extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: '',
      email: '',
      country: '',
      phone: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let email = e.target.email;
    let country = e.target.country;
    let phone = e.target.phone;
    let message = e.target.message;

    this.setState({
      [name]: e.target.value,
      [email]: e.target.value,
      [country]: e.target.value,
      [phone]: e.target.value,
      [message]: e.target.value
    });

    console.log(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputRef = firebase
      .database()
      .ref()
      .child('object')
      .child('inputData');
    inputRef.on('value', snapshot => {
      this.setState({
        name: snapshot.val(),
        email: snapshot.val(),
        country: snapshot.val(),
        phone: snapshot.val(),
        message: snapshot.val()
      });
    });
  }

  render() {
    return (
      <div className="formulario">
        <h3 style={{ textAlign: 'center' }}>Or leave your Message!</h3>

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
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where do you live?"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="What is your number?"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  Tell me what would you like me to design for you
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
            <Button
              raised
              accent
              ripple
              type="submit"
              style={{ float: 'right', marginTop: '15px' }}
            >
              Submit
            </Button>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Formulario;
