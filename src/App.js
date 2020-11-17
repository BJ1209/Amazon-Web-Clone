import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
