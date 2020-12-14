import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
    this.props.history.push(`/home`);
  }

  render() {
    return (
      <div className="bg">
        <Box boxShadow={4} className="center-screen login-box">
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <form className onSubmit={this.handleLogin}>
                <Grid spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h3">Journalize</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={8} className="login-banner"></Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default withRouter(Login);
