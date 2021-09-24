import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import ToolBar from "@material-ui/core/Toolbar/Toolbar";
import {
  IconButton,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ContactIcon from "@material-ui/icons/AccountCircleRounded";
import SearchBar from "./Search";
import RightSIde from "./RightSIde";
import clsx from "clsx";

function TopNav({ setfullSide, fullSide }) {
  const [email, setemail] = useState("");

  const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor: "#ffffff",
      color: "#5f6368",
    },
    account: {
      color: "#1a73e8",
      width: theme.spacing(5.5),
      height: theme.spacing(5.5),
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 50,
    },
    leftSide: {
      display: "flex",
      alignItems: "center",
      gap: 5,
    },
    hide: {
      display: "none",
    },
  }));

  const hide = useMediaQuery("(max-width: 500px)");

  const sidenav = () => {
    setfullSide(!fullSide);
  };

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    setemail(email);
  }, []);

  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appbar}>
      <ToolBar className={classes.toolbar}>
        <div className={classes.leftSide}>
          <IconButton edge="start" arial-label="Menu" onClick={sidenav}>
            <MenuIcon />
          </IconButton>
          <ContactIcon
            className={clsx({ [classes.account]: true, [classes.hide]: hide })}
          />
          <Typography variant="h5" component="h1">
            Contacts
          </Typography>
        </div>
        <SearchBar />
        <RightSIde email={email} />
      </ToolBar>
    </AppBar>
  );
}

export default TopNav;
