import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sajek from "./components/Travel/Sajek";
import Sundorban from "./components/Travel/Sundorban";
import Sreemongol from "./components/Travel/Sreemongol";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Sajek">
            <Sajek />
          </Route>
          <Route path="/sundorbon">
            <Sundorban />
          </Route>
          <Route path="/sreemongol">
            <Sreemongol />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
