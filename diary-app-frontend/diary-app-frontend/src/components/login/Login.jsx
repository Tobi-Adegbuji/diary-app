import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

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
      <div className="bg-login">
        <Box boxShadow={4} className="center-screen login-box">
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
                  spacing={5}
                >
                  <Grid item xs={12} className="logo">
                    <div className="div-size"></div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      type="email"
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="outlined" color="primary" type="submit">
                      Sign In
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary">
                      <Link className="link-style" to="/signup">
                        Register
                      </Link>
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
