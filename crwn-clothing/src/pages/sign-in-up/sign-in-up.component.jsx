import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInUpContainer } from './sign-in-up.styles';

const SignInPage = () => {
  return (
    <SignInUpContainer>
      <SignIn />
      <SignUp />
    </SignInUpContainer>
  );
};

export default SignInPage;
