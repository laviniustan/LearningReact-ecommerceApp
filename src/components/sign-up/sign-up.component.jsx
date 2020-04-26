import React from 'react';
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custon-buttom.component';
import {auth, createUserProfilDocument, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component{

    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }


    handleSubmit= async event =>{
        event.preventDefault();

        const {displayName, email, password,confirmPassword}=this.state

        if(password != confirmPassword){
            alert("password don't match")
            return;
        }
        try{
            const {user}= await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            })
        }
        catch(error){
            console.error(error)
        }

    }

    handleChange = event =>{
        const{name, value}= event.target

        this.setState({[name]:value} )
    }

    render(){
        const {displayName, email, password,confirmPassword}=this.state
        return(
            <div className='sign-up'>
                <h1 className='title'>i do not have account</h1>
                <span>Sign up with youre mail and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange}
                     label='Display Name'  >
                    </FormInput>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange}
                     label='Email'  >

                    </FormInput>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange}
                     label='password'  >

                    </FormInput>
                    <FormInput type='password' name='ConfirmPassword' value={confirmPassword} onChange={this.handleChange}
                     label='Confirm Password'  >

                    </FormInput>

                <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>

        )
    }
}
export default SignUp;