import { Box, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import "./Diary.css";

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Example",
      entryCount: "Entries: 0",
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.history.push({
      pathname: `/app/diary/${this.props.id}`,
      //userId: this.props.location.userId
    });
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <Box boxShadow={4} className="diary">
          <Typography variant="h6">{this.props.name}</Typography>
        </Box>
      </div>
    );
  }
}

export default withRouter(Diary);
