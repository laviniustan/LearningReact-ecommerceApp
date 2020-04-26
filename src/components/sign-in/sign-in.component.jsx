import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custon-buttom.component'
import './sign-in.style.scss';
import SignInSignUpPage from '../../pages/sign-in-sign-up/sign-in-sign-up.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';



class SignIn extends React.Component{

    constructor(){
        super()
        this.state={
            email:'',
            password:''
            
        }
    }
    
// ======================

    handleSubmit= async (event)=>{
        event.preventDefault();

        const{email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            // if cucceeds-> clear state
            this.setState({email:'',password:'' })

        }catch(error){
            console.error(error)
        }
 
    }

    handleChange=(event)=>{
        const{value, name}= event.target;
        this.setState({[name]:value})
    }





// ====================
    render(){

        const{email, password} = this.state;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email}
                        handleChange={this.handleChange}
                        label='email' 
                        required></FormInput>

                  

                    {/* ========================== */}
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={password} 
                        handleChange={this.handleChange} 
                        required></FormInput>

                    
                    {/* --------------------------- */}
                    
                    <div className='buttons'>

                        <CustomButton type='submit' value='Submit Form'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn="isGoogleSignIn">
                            {''} Sign in with Google{' '}

                        </CustomButton>

                     </div>
              
                </form> 
            
            </div>
        )
    }
}

export default SignIn;