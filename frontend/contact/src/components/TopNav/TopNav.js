import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import ToolBar from "@material-ui/core/Toolbar/Toolbar";
import { IconButton, Typography, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ContactIcon from "@material-ui/icons/AccountCircleRounded";
import SearchBar from "./Search";
import RightSIde from "./RightSIde";

function TopNav() {
  const useStyles = makeStyles(theme => ({
    appbar: {
      backgroundColor: "#ffffff",
      color: "#5f6368"
    },
    account: {
        color: '#1a73e8',
        width: theme.spacing(5.5),
        height: theme.spacing(5.5)
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      gap: 80,
    },
    leftSide: {
      display: "flex",
      alignItems: "center",
      gap: 5,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appbar}>
        <ToolBar className={classes.toolbar}>
          <div className={classes.leftSide}>
            <IconButton edge="start" arial-label="Menu">
              <MenuIcon />
            </IconButton>
            <ContactIcon fontSize="large" className={classes.account} />
            <Typography variant="h5" component="h1">
              Contacts
            </Typography>
          </div>
          <SearchBar />
          <RightSIde />
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default TopNav;
