import {
  Grid,
  Box,
  Card,
  Avatar,
  Typography,
  Button,
  TextField,
  Switch,
  Snackbar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UserDataService from "../../../service/UserDataService";
import Modal from "react-modal";
import "./AccountSettings.css";
import { withRouter } from "react-router-dom";

function AccountSettings(props) {
  const [user, setUser] = useState({});
  const [toggleState, setToggleState] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [passwordModalState, setPasswordModalState] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      //await means to wait for response to comeback before doing something.
      const request = await UserDataService.retrieveUser();
      setUser(request.data);
      return request;
    }
    fetchData();
  }, []);

  const handleDeleteSubmition = () => {
    UserDataService.deleteUserByUsername()
      .then(props.history.push(`../login`))
      .catch((error) => console.log(error));
  };

  function handleSubmition(event) {
    event.preventDefault();

    const userDetails = {
      firstName: firstName.trim() === "" ? user.firstName : firstName,
      lastName: lastName.trim() === "" ? user.lastName : lastName,
      email: email.trim() === "" ? user.email : email,
      username: username.trim() === "" ? user.username : username,
    };
    console.log(userDetails);
    UserDataService.updateUserDetails(userDetails)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setToggleState(false);
    setOpen(true);
  }

  const handleToggle = () => {
    toggleState === false ? setToggleState(true) : setToggleState(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box textAlign="center" className="account_Settings_container">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Card className="settings_card profile_pic_settings">
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              spacing={4}
            >
              <Grid item>
                <Avatar
                  style={{ height: "8rem", width: "8rem" }}
                  className="avatar"
                >
                  {/* {user.firstName.charAt(0)} */}
                </Avatar>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" fontWeight="fontWeightBold">
                  {user.firstName} <br /> {user.lastName}
                </Typography>
                <Typography style={{ marginTop: "20px" }}></Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card className="settings_card account_information_settings">
            <form
              className
              noValidate
              autoComplete="off"
              onSubmit={handleSubmition}
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
                  <Typography variant="h4">Account Settings</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Switch
                    checked={toggleState}
                    onChange={handleToggle}
                    name="checkedB"
                    color="primary"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    type="text"
                    name="firstName"
                    variant="outlined"
                    defaultValue={user.firstName}
                    key={user.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    helperText="First Name"
                    disabled={!toggleState}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    key={user.lastName}
                    defaultValue={user.lastName}
                    type="text"
                    name="lastName"
                    helperText="Last Name"
                    variant="outlined"
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={!toggleState}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    key={user.email}
                    id="outlined-basic"
                    type="email"
                    name="email"
                    variant="outlined"
                    helperText="Email"
                    defaultValue={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!toggleState}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    key={user.username}
                    id="outlined-basic"
                    variant="outlined"
                    name="username"
                    type="text"
                    helperText="Username"
                    defaultValue={user.username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={!toggleState}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    disabled={!toggleState}
                  >
                    Update Profile
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    message="Profile Updated!"
                  ></Snackbar>
                </Grid>
                <Grid item xs={12}>
                  <Box m={1} display="inline">
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={!toggleState}
                      onClick={() => setPasswordModalState(true)}
                    >
                      Change Password
                    </Button>
                  </Box>
                  <Box m={1} display="inline">
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled={!toggleState}
                      onClick={() => setDeleteModalState(true)}
                    >
                      Delete Account
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>

      <Modal
        className="Modal"
        isOpen={deleteModalState}
        onRequestClose={() => setDeleteModalState(false)}
        style={{
          overlay: {
            backgroundColor: "white",
            background: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <div className="delete-center-screen">
          <div className="delete-form-box">
            <form onSubmit={() => handleDeleteSubmition()} className="">
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <Box textAlign="center">
                    <Typography variant="h5">
                      Are you sure you want to delete your account?
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" type="submit">
                    Delete Account
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setDeleteModalState(false)}
                  >
                    Keep Account
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Modal>

      <Modal
        className="Modal"
        isOpen={passwordModalState}
        onRequestClose={() => setPasswordModalState(false)}
        style={{
          overlay: {
            backgroundColor: "white",
            background: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <div className="delete-center-screen">
          <div className="delete-form-box">
            <form onSubmit={() => {}} className="">
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <Typography variant="h5">Password Change</Typography>
                </Grid>
                <Grid item>
                  <TextField
                    id="filled-basic"
                    label="Current Password"
                    name="prevPassword"
                    variant="filled"
                    onChange
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="filled-basic"
                    label="New Password"
                    name="newPassword"
                    variant="filled"
                    onChange
                  />
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick>
                    Change Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Modal>
    </Box>
  );
}

export default AccountSettings;
