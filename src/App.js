import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Shop from './pages/shops/shops.component';
import Header from './components/header/header.component' 
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {

  return (
    <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/shop'} component={Shop} />
        <Route exact path={'/signin'} component={SignInAndSignUpPage} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
