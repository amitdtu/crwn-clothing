import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleOnChange}
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleOnChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Signin with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
