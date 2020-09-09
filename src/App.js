import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Shop from './pages/shops/shops.component';
 
function App() {

  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/shop'} component={Shop} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
