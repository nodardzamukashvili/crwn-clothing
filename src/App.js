import './App.css';
import HomePage from './pages/homepage/homepage.component';
import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";

const HatsPage = () => (
  <div>
      <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route path='/hats' component = {HatsPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
