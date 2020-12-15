import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "./DiaryForm.css";

class DiaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      diaryName: "",
      diaryColor: "",
    };
  }

  colorValues = ["Green", "Red", "Yellow", "Blue", "Orange"];

  render() {
    return (
      <div className="center-screen">
        <div className="form-box">
          <form onSubmit>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h5">New Diary</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="filled-basic"
                  label="Diary Name"
                  variant="filled"
                  onChange
                />
              </Grid>
              <Grid item>
                <TextField
                  id="filled-select-currency"
                  select
                  label="Diary Color"
                  value={this.diaryColor}
                  onChange
                  helperText="Please select Diary color"
                  variant="filled"
                >
                  {this.colorValues.map((color, index) => (
                    <MenuItem key={index} value={color}></MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default DiaryForm;
