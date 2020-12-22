import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

import "./Entry.css";
import BookIcon from "@material-ui/icons/Book";
import { Box, Grid, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function Entry(props) {
  const [deleteModalState, setDeleteModalState] = useState(false);

  const handleDeleteSubmition = () => {
    // EntryDataService.deleteEntry()
    //   .then(Window.lo)
    //   .catch((error) => console.log(error));
  };

  return (
    <Card className="card">
      <CardHeader
        avatar={<BookIcon />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.dateCreated}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>

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
    </Card>
  );
}

export default Entry;
