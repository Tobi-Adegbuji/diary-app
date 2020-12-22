import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Diary from "../../SideNav/diary/Diary";
import "./Entries.css";
import Entry from "./Entry";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";
import EntryDataService from "../../../service/EntryDataService";

function Entries(props) {
  const [entries, setEntries] = useState([]);

  const diaryId = {
    diaryId: props.match.params.diaryId,
  };

  useEffect(() => {
    async function fetchData() {
      console.log(diaryId);
      const request = await EntryDataService.retrieveEntries(diaryId);
      setEntries(request.data);
      return request;
    }
    fetchData();
  }, []);

  const handleNewEntryClick = () => {
    props.history.push(`${props.match.params.diaryId}/entry`);
  };

  return (
    <div className="entries_container">
      <Box textAlign="center">
        <Grid container>
          <Grid xs={4} item>
            <Box m={6}>
              <AddBoxIcon
                className="add_entry_btn"
                fontSize="large"
                onClick={() => handleNewEntryClick()}
              />
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box m={5}>
              <TextField
                id="outlined-basic"
                label="Search Entries"
                variant="outlined"
                className="entries_search_box"
              />
            </Box>
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid xs={12} item>
            {entries.map((entry) => (
              <Entry
                key={entry.id}
                title={entry.title}
                message={entry.message}
                dateCreated={entry.dateCreated}
                // id={diary.id}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Entries;
