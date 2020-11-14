import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Shop from "./pages/shops/shops.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component"

import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.action'
// import { selectCollectionForPreview } from './redux/shop/shop.selector'

const App = ({ checkUserSession, currentUser }) => {
 
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


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
              currentUser ? (
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

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatch = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapState, mapDispatch)(App);

// in new pc