import React, { Component, useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import CustomButton from "../custom-button/custom-button.component";
// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import { connect } from "react-redux";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;
    emailSignInStart(email,password)

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    // } catch (err) {
    //   console.log(err);
    // }

    // setState({ email: "", password: "" });
  };

    const { email, password } = userCredentials;
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={handleOnChange}
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={handleOnChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> sign in </CustomButton>
            <CustomButton type="click" onClick={googleSignInStart} isGoogleSignIn>
              Signin with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

const mapDispatch = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDispatch)(SignIn)
