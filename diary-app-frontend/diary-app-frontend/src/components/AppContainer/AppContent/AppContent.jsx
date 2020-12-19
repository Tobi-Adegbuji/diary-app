import React from "react";
import "./AppContent.css";
import NoSelection from "./noSelection/NoSelection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppRouter from "../../routers/AppRouter";

function AppContent() {
  return (
    <div className="appContent">
      {/* <Route exact component={NoSelection}></Route>
      <Route path="/home/entries" component={AllEntries} /> */}
      <AppRouter />
    </div>
  );
}

export default AppContent;
