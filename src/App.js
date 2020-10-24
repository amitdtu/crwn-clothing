import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Shop from "./pages/shops/shops.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector'

import { setCurrentUser } from "./redux/user/user.action";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/shop"} component={Shop} />
          <Route exact path={"/checkout"} component={CheckoutPage} />
          <Route
            exact
            path={"/signin"}
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatch = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapState, mapDispatch)(App);

// in new pc