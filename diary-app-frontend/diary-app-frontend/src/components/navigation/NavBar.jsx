import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  let history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleLogoutClick() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Box
      boxShadow={4}
      justifyContent="center"
      alignItems="center"
      display="flex"
      className="bottom nav"
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Diaries"
          value="recents"
          icon={<MenuBookIcon />}
        />
        <BottomNavigationAction
          label="Settings"
          value="favorites"
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label="Sign Out"
          value="folder"
          onClick={handleLogoutClick}
          icon={<ExitToAppIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
