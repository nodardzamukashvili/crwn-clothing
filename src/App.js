import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
