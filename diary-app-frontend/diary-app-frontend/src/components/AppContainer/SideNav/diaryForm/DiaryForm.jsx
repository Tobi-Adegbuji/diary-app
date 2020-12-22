import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "./DiaryForm.css";
import { withRouter } from "react-router";
import DiaryDataService from "../../../service/DiaryDataService";

class DiaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.State = {
      diaryName: "",
      diaryColor: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmition = this.handleSubmition.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmition(event) {
    event.preventDefault();
    const diaryData = {
      name: this.state.diaryName,
      color: this.state.diaryColor,
    };
    console.log(diaryData);
    DiaryDataService.createDiary(diaryData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.closeModal();
  }

  colorValues = ["GREEN", "RED", "YELLOW", "BLUE", "ORANGE"];

  render() {
    return (
      <div className="diary-form-center-screen">
        <div className="form-box">
          <form onSubmit={this.handleSubmition}>
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
                  name="diaryName"
                  variant="filled"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="filled-select-currency"
                  select
                  label="Diary Color"
                  name="diaryColor"
                  onChange={this.handleChange}
                  helperText="Please select Diary color"
                  variant="filled"
                >
                  {this.colorValues.map((color, index) => (
                    <MenuItem key={index} value={color}>
                      {color}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" type="submit">
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

export default withRouter(DiaryForm);
