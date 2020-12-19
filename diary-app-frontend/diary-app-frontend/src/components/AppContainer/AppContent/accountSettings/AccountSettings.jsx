import { Grid, Box, Card, Avatar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UserDataService from "../../../service/UserDataService";
import "./AccountSettings.css";

function AccountSettings() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      //await means to wait for response to comeback before doing something.
      const request = await UserDataService.retrieveUser();
      setUser(request.data);
      return request;
    }
    fetchData();
  }, []);

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
                <Typography style={{ marginTop: "20px" }}>
                  User since: 05/06/2016
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card className="settings_card account_information_settings"></Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AccountSettings;
