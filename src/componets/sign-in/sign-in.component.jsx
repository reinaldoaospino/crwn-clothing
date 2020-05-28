import React from 'react';


import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import{auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SigIn extends React.Component{
    constructor(props){
        super();

        this.state={
            email:'',
            password:''
        }

    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email, password}= this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password:''})
        } catch (error) {
            console.log(error);
        }
        


    }

    handleChange = event =>{
        const {value, name} = event.target;
        

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required
                        label ="email"
                        handleChange={this.handleChange}
                    />
                    <label>Email</label>
                    <FormInput 
                        name="password" 
                        type="password" 
                        label = "password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className='buttons' >
                    <CustomButton type="submit" is>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}

export default SigIn;