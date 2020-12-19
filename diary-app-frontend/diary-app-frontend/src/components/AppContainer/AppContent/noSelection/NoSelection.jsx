import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./NoSelection.css";
import Image from "../../../../img/undraw_upload_87y9.png";

export default function NoSelection() {
  return (
    <div className="center_no_selection">
      <img src={Image} className="upload_image"></img>
      <Typography>Please Select a Diary or Add and Select One</Typography>
    </div>
  );
}
