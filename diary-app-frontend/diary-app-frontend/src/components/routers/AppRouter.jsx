import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoSelection from "../AppContainer/AppContent/noSelection/NoSelection";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/home">
              <NoSelection />
            </Route>
            <Route path component />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
