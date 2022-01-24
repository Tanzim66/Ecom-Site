/* eslint-disable require-jsdoc */
import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import {SignInContainer, Title, ButtonsContainer} from './sign-in.styles';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state={
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <SignInContainer>
        <Title>
            I already have an account
        </Title>
        <span>
            Sign in with your email and password
        </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label='email'
            required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label='password'
            required />
          <ButtonsContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn>
              {' '}Sign In With Google{' '}
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
