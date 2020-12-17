import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import UserDataService from "../service/UserDataService";

import "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      user: {},
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSignUp(event) {
    event.preventDefault();

    const signUpData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };

    console.log(signUpData);
    UserDataService.registerUser(signUpData);
    this.props.history.push(`/login`);
  }

  render() {
    return (
      <div className="bg-login">
        <Box boxShadow={4} className="center-screen signUp-box">
          <Grid container spacing={0}>
            <Grid
              container
              item
              xs={4}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <form
                className
                noValidate
                autoComplete="off"
                onSubmit={this.handleSignUp}
                mx
              >
                <Grid
                  container
                  spacing={3}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <Typography variant="h5">Registration</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      type="text"
                      name="firstName"
                      variant="filled"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      type="text"
                      name="lastName"
                      variant="filled"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      type="email"
                      name="email"
                      variant="filled"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Username"
                      variant="filled"
                      name="username"
                      type="username"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="filled"
                      name="passwords"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      color="primary"
                      type="submit"
                      // disabled="true"
                    >
                      Complete
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/" className="signup-link-style">
                      Already have an account?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={8} className="signUp-banner"></Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default withRouter(SignUp);
