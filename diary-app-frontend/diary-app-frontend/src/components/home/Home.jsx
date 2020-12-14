import React from "react";
import AppContainer from "../AppContainer/AppContainer";
import NavBar from "../navigation/NavBar";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar className="bottom" />
        <AppContainer />
      </div>
    );
  }
}

export default Home;
