import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../login/Login";
import Home from "../home/Home";
import SignUp from "../signUp/SignUp";

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/signup" component={SignUp} />
            <Route path="/home/:id" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MainRouter;
