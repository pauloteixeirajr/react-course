import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do not have an account</TitleContainer>
      <span>Sign with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Your name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
