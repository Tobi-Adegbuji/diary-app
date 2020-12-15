import { Box, Typography } from "@material-ui/core";
import React from "react";
import "./Diary.css";

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Example",
      entry: "example",
    };
  }

  render() {
    return (
      <div>
        <Box boxShadow={4} className="diary">
          <Typography variant="h6">{this.state.title}</Typography>
          <Typography variant="p">{this.state.entry}</Typography>
        </Box>
      </div>
    );
  }
}

export default Diary;
