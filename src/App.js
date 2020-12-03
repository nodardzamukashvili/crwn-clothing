import './App.css';
import HomePage from './pages/homepage/homepage.component';
import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import ShopPage from './pages/shop/shop-page.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route path='/shop' component = {ShopPage}/>
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
