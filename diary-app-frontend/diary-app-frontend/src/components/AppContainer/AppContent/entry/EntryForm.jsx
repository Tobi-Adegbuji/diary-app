import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import EntryDataService from "../../../service/EntryDataService";
import "./EntryForm.css";

function EntryForm(props) {
  const [entry, setEntry] = useState("");
  const [entryTitle, setEntryTitle] = useState("");

  function handleEntrySubmition(event) {
    event.preventDefault();

    const entryForm = {
      diaryId: props.match.params.diaryId,
      message: entry,
      title: entryTitle,
    };

    console.log(entryForm);

    EntryDataService.createEntry(entryForm)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });

    props.history.push(`/app`);
  }

  return (
    <Box className="entry_paper" boxShadow={3}>
      <form onSubmit={handleEntrySubmition}>
        <Grid
          container
          spacing={6}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Grid item xs={12} alignContent="center" justify="center">
            <TextField
              id="standard-basic"
              label="Entry Title"
              onChange={(e) => setEntryTitle(e.target.value)}
              className="entry_fields"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Write Away!"
              multiline
              name="entry"
              rows={20}
              variant="outlined"
              onChange={(e) => setEntry(e.target.value)}
              rowsMax={Infinity}
              className="entry_fields"
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" type="submit">
              Done
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default EntryForm;
