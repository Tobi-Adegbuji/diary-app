import { Box, Grid, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Diary from "../../SideNav/diary/Diary";
import "./Entries.css";
import Entry from "./Entry";
import AddIcon from "@material-ui/icons/Add";

class Entries extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="entries_container">
        <Box textAlign="center">
          <Grid container>
            <Grid xs={12} item>
              <Grid container></Grid>
              <AddIcon fontSize="large" />

              <TextField
                id="outlined-basic"
                label="Search Entries"
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} item>
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Entries;
