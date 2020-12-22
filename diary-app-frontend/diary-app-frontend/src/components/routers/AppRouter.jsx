import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoSelection from "../AppContainer/AppContent/noSelection/NoSelection";
import Entries from "../AppContainer/AppContent/entry/Entries";
import AccountSettings from "../AppContainer/AppContent/accountSettings/AccountSettings";
import EntryForm from "../AppContainer/AppContent/entry/EntryForm";
class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/app" component={NoSelection} />
          <Route path="/app/diary/:diaryId/entry" component={EntryForm} />
          <Route
            path="/app/diary/:diaryId"
            component={(props) => (
              <Entries {...props} key={window.location.pathname} />
            )}
          />
          <Route path="/app/account" component={AccountSettings} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
