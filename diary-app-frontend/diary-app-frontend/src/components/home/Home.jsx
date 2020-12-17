import { ContactSupportOutlined } from "@material-ui/icons";
import React from "react";
import AppContainer from "../AppContainer/AppContainer";
import NavBar from "../navigation/NavBar";
import UserDataService from "../service/UserDataService";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const config = {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("token"),
    //   },
    // };

    UserDataService.retrieveUser()
      .then((response) => {
        console.log(response);
        this.setState({
          user: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.user) {
      return (
        <div className="bg">
          <AppContainer firstName={this.state.user.firstName} />
          <NavBar />
        </div>
      );
    } else {
      return (
        <div className="bg">
          <AppContainer />
          <NavBar />
        </div>
      );
    }
  }
}

export default Home;
