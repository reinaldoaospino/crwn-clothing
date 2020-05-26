import React from 'react';


import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SigIn extends React.Component{
    constructor(props){
        super();

        this.state={
            email:'',
            password:''
        }

    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email: '', password:''})
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
                    <CustomButton type="submit">Sign in</CustomButton>
                    />
                </form>

            </div>
        )
    }
}

export default SigIn;