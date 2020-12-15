import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password1: "",
      password2: "",
      firstName: "",
      lastName: "",
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLogin(event) {
    event.preventDefault();
    console.log("Clicked");
    console.log(this.state.username);
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
                onSubmit={this.handleLogin}
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
                      variant="filled"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      type="text"
                      variant="filled"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      type="email"
                      variant="filled"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="filled"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Retype Password"
                      variant="filled"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="outlined" color="primary" type="submit">
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
