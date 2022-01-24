import React from 'react';

import {AuthContainer} from './auth.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Auth = ()=>{
  return (
    <AuthContainer>
      <SignIn/>
      <SignUp />
    </AuthContainer>
  );
};

export default Auth;
