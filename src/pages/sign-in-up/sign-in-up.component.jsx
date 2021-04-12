import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';
import './sign-in-up.style.scss';

const SignInSignOutPage =() =>(

    <div className='sign-in-and-sign-up'>

   <SignIn/>
   <Signup/>
    </div>
)

export default SignInSignOutPage;