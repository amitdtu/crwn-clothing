import React, { Component } from 'react'
import './sign-in-and-sign-up.style.scss'
import SignIn from '../../components/sign-in/sign-in.component'

export default class SignInAndSignUpPage extends Component {
    render() {
        return (
            <div className="sign-in-and-sign-up">
                <SignIn />
            </div>
        )
    }
}
