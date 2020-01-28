import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../config/fire';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      hasAgreed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.nameInput = React.createRef();
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.hasAgreed) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
          console.log(error);
        });
      this.nameInput.current.value = '';
      this.passwordInput.current.value = '';
      this.emailInput.current.value = '';
      alert('You Signed Up!');
    }
  }
  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              ref={this.nameInput}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              ref={this.passwordInput}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your E-Mail"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              ref={this.emailInput}
            />
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />
              I agree all statements in{' '}
              <a href="" className="FormField__TermsLink">
                Terms of Service
              </a>
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField__Link">
              I am already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
