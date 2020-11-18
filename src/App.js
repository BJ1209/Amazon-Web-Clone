import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./config/firebase";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        // Logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
