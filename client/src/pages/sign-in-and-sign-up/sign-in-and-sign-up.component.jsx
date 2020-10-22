import React from 'react';

import SigIn from '../../componets/sign-in/sign-in.component';
import SignUp from '../../componets/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
       <SigIn/> 
       <SignUp/>
    </div>
);

export default SignInAndSignUpPage;