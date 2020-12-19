import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../login/Login";
import Home from "../home/Home";
import SignUp from "../signUp/SignUp";
import UserDataService from "../service/UserDataService";

class MainRouter extends Component {
  state = {};

  componentDidMount() {
    // const config = {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("token"),
    //   },
    // };
    UserDataService.retrieveUser()
      .then((response) => {
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Login setUser={this.setUser} />}
            />
            <Route path="/signup" component={SignUp} />
            <Route
              path="/app"
              component={() => <Home user={this.state.user} />}
            ></Route>
            <Route
              path="/login"
              component={() => <Login setUser={this.setUser} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MainRouter;
